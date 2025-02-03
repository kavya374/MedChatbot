import React, { useEffect, useState } from "react";
import {
  HeartPulse,
  Utensils,
  Activity,
  Upload,
  MessageCircle,
} from "lucide-react";
import "./Body.css";
import video from "../Assets/video.mp4";
import client1 from "../Assets/client1.jpg";
import client2 from "../Assets/client2.jpg";
import client3 from "../Assets/client3.jpg";

export default function Body({ activeTab }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {activeTab === "home" && (
        <>
          <section className="hero">
            <div className="video-container">
              {isVideoLoaded && (
                <video
                  className="video-frame"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  src={video}
                  type="video/mp4"
                />
              )}
            </div>

            <div className="hero-content">
              <h1 className="hero-title">AI-Powered Healthcare for Everyone</h1>
              <p className="hero-description">
                Sephina uses advanced AI to provide accessible medical
                assistance and personalized nutrition guidance, helping reduce
                health disparities across the globe.
              </p>
            </div>
          </section>
          {/*Sephina */}
          <section className="sephi">
          <div className="meet-sephina">
            <div className="meet-container">
              <div className="meet-content">
                <h1 className="meet-title">Meet Sephina</h1>
                <p className="meet-description">
                  Sephina is our AI-powered chatbot, designed to assist users
                  with medical queries and provide personalized health advice.
                </p>
                <div className="chat-preview">
                  <div className="chat-message">
                    "Hello! I'm Sephina, your personal health assistant. How can
                    I help you today?"
                  </div>
                </div>
              </div>
              <div className="meet-image">
                <MessageCircle size={120} className="chat-icon" />
              </div>
            </div>
            <div className="meet-features">
              <div className="meet-feature">
                <h3>24/7 Availability</h3>
                <p>Access healthcare support anytime, anywhere</p>
              </div>
              <div className="meet-feature">
                <h3>Personalized Care</h3>
                <p>Get tailored health recommendations based on your profile</p>
              </div>
              <div className="meet-feature">
                <h3>Multi-language Support</h3>
                <p>Communicate in your preferred language</p>
              </div>
            </div>
          </div>
          </section>

          {/* Features */}
          <h2 className="features-title">Our Features</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-header">
                <HeartPulse className="feature-icon" size={32} />
                <h3 className="feature-title">AI Diagnosis</h3>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/020/534/363/original/ai-brain-illustration-concept-on-white-background-vector.jpg" />
              <p className="feature-description">
                Upload medical images for AI-powered analysis and get
                preliminary diagnoses with high accuracy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <Utensils className="feature-icon" size={32} />
                <h3 className="feature-title">Nutrition Plans</h3>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/025/682/116/original/list-of-diet-plans-with-keto-diet-training-slender-small-body-concept-nutrition-control-and-vegetable-fish-oil-weight-management-individual-diet-service-flat-illustration-vector.jpg" />
              <p className="feature-description">
                Receive personalized nutrition guidance based on your health
                status, local diet, and economic conditions.
              </p>
            </div>
          </div>

          <section class="testimonials">
            <h2>What Our Clients Say</h2>
            <div class="testimonials-container">
              <div class="testimonial">
                <img src={client1} alt="Client Photo" />
                <p class="name">John Doe</p>
                <p class="review">
                  "This service is amazing! Highly recommended for anyone
                  looking for quality and professionalism."
                </p>
                <div class="stars">⭐⭐⭐⭐</div>
              </div>

              <div class="testimonial">
                <img src={client2} alt="Client Photo" />
                <p class="name">Sarah Smith</p>
                <p class="review">
                  "Fantastic experience! The team was professional and the
                  results exceeded my expectations."
                </p>
                <div class="stars">⭐⭐⭐⭐⭐</div>
              </div>

              <div class="testimonial">
                <img src={client3} alt="Client Photo" />
                <p class="name">Michael Brown</p>
                <p class="review">
                  "Great service with excellent customer support. I will
                  definitely come back!"
                </p>
                <div class="stars">⭐⭐⭐</div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Diagnosis Tab */}
      {activeTab === "diagnosis" && (
        <div className="diagnosis">
          <div className="diagnosis-container">
            <h2 className="feature-title">AI Medical Diagnosis</h2>
            <div className="upload-area">
              <Upload size={48} className="feature-icon" />
              <p className="feature-description">
                Upload your medical images (X-rays, CT scans, etc.)
              </p>
              <button className="button">Select Files</button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sephina AI Medical Assistant. All rights reserved.</p>
          <p>
            Improving healthcare accessibility through artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}
