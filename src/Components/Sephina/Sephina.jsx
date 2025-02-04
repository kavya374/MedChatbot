import React from 'react'
import "./Sephina.css";
import {
  MessageCircle,
} from "lucide-react";

export const Sephina = () => {
  return (
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
  )
}
