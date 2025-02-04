from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure Gemini API
try:
    genai.configure(api_key="AIzaSyBqqpLoE2uyDnXsV5YveT_9W3hH7J_6yRk")
    model = genai.GenerativeModel("gemini-1.5-flash")
    logger.info("Successfully configured Gemini API")
except Exception as e:
    logger.error(f"Failed to configure Gemini API: {str(e)}")
    raise

# Initialize chatbot state
CONVERSATION_STATE = {
    "questions_asked": [],
    "symptoms": {},
    "possible_diseases": []
}

# Predefined questions and flow
INITIAL_QUESTIONS = ["Which region of India are you from?", "What is your age?", "Please specify your gender (Male/Female)"]
SYMPTOM_QUESTIONS = [
    {"question": "Do you have a fever? (Yes/No)", "symptom": "fever"},
    {"question": "Are you experiencing pain anywhere? (Yes/No)", "symptom": "pain"},
    {"question": "Do you have digestive issues? (Yes/No)", "symptom": "digestive_issues"},
    {"question": "Are you feeling unusually tired or weak? (Yes/No)", "symptom": "fatigue"},
    {"question": "Do you have difficulty breathing? (Yes/No)", "symptom": "breathing_difficulty"}
]

DETAILED_QUESTIONS = {
    "fever": [{"question": "How long have you had the fever? (in days)", "detail": "fever_duration"}],
    "pain": [{"question": "On a scale of 1-10, how would you rate your pain?", "detail": "pain_level"}],
    "digestive_issues": [{"question": "Are you experiencing nausea or diarrhea? (Yes/No)", "detail": "nausea_or_diarrhea"}],
    "breathing_difficulty": [{"question": "Do you have a cough or chest tightness? (Yes/No)", "detail": "cough_or_chest_tightness"}]
}

DISEASE_MAPPING = {
    "fever": ["Malaria", "Dengue", "Typhoid"],
    "pain": ["Injury", "Arthritis", "Migraine"],
    "digestive_issues": ["Food Poisoning", "Gastritis"],
    "fatigue": ["Anemia", "Diabetes"],
    "breathing_difficulty": ["Asthma", "Pneumonia"]
}

# Route: Home Page
@app.route("/")
def index():
    try:
        return render_template("index.html")
    except Exception as e:
        logger.error(f"Error rendering template: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

# Route: Chat API
@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        global CONVERSATION_STATE
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data received"}), 400

        user_message = data.get("message", "").strip()
        if not user_message:
            return jsonify({"error": "Empty message received"}), 400

        # Determine which question to ask next
        if not CONVERSATION_STATE["questions_asked"]:
            next_question = INITIAL_QUESTIONS[len(CONVERSATION_STATE["questions_asked"])]
            CONVERSATION_STATE["questions_asked"].append(next_question)
            return jsonify({"message": next_question, "chat_history": CONVERSATION_STATE["questions_asked"]})

        # Process responses to initial questions and symptom questions
        if len(CONVERSATION_STATE["questions_asked"]) < len(INITIAL_QUESTIONS) + len(SYMPTOM_QUESTIONS):
            current_question = CONVERSATION_STATE["questions_asked"][-1]
            symptom_data = [q for q in SYMPTOM_QUESTIONS if q["question"] == current_question]
            if symptom_data:
                symptom_key = symptom_data[0]["symptom"]
                CONVERSATION_STATE["symptoms"][symptom_key] = user_message.lower() == "yes"

            # Ask the next question (initial questions + symptom questions)
            if len(CONVERSATION_STATE["questions_asked"]) < len(INITIAL_QUESTIONS) + len(SYMPTOM_QUESTIONS):
                next_index = len(CONVERSATION_STATE["questions_asked"]) - len(INITIAL_QUESTIONS)
                next_question = SYMPTOM_QUESTIONS[next_index]["question"]
                CONVERSATION_STATE["questions_asked"].append(next_question)
                return jsonify({"message": next_question, "chat_history": CONVERSATION_STATE["questions_asked"]})

        # Ask detailed probing questions based on symptoms
        for symptom, detailed_questions in DETAILED_QUESTIONS.items():
            if CONVERSATION_STATE["symptoms"].get(symptom) and not any(
                    q["question"] in CONVERSATION_STATE["questions_asked"] for q in detailed_questions):
                next_question = detailed_questions[0]["question"]
                CONVERSATION_STATE["questions_asked"].append(next_question)
                return jsonify({"message": next_question, "chat_history": CONVERSATION_STATE["questions_asked"]})

        # Infer possible diseases
        possible_diseases = []
        for symptom, has_symptom in CONVERSATION_STATE["symptoms"].items():
            if has_symptom:
                possible_diseases.extend(DISEASE_MAPPING.get(symptom, []))
        possible_diseases = list(set(possible_diseases))  # Remove duplicates
        CONVERSATION_STATE["possible_diseases"] = possible_diseases

        # Generate response with possible disease and diet recommendations
        region = CONVERSATION_STATE["questions_asked"][0].replace("Which region of India are you from?", "").strip()
        if possible_diseases:
            response_text = (
                f"Based on your symptoms, you may have: {', '.join(possible_diseases)}.\n\n"
                f"Recommended diet for your region ({region}):\n"
                "• Drink plenty of fluids.\n"
                "• Include fresh fruits and vegetables.\n"
                "• Avoid processed and spicy foods.\n"
                "• Rest well and consult a doctor for proper diagnosis."
            )
        else:
            response_text = (
                "I couldn't determine a possible condition based on the provided information. "
                "Please consult a medical professional for further assistance."
            )

        # Reset conversation state for the next session
        CONVERSATION_STATE = {"questions_asked": [], "symptoms": {}, "possible_diseases": []}
        return jsonify({"message": response_text, "chat_history": []})

    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        return jsonify({"error": "Server error occurred"}), 500

if __name__ == "__main__":
    try:
        app.run(host='0.0.0.0', port=5000, debug=True)
    except Exception as e:
        logger.error(f"Failed to start server: {str(e)}")
