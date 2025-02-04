import React from 'react'
import "./Features.css"

import {
  HeartPulse,
  Utensils,
} from "lucide-react";

export const Features = () => {
  return (
    <div>
      <h2 className="features-title">Our Features</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-header">
                <HeartPulse className="feature-icon" size={32} />
                <h3 className="feature-title">AI Diagnosis</h3>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/020/534/363/original/ai-brain-illustration-concept-on-white-background-vector.jpg" loading="lazy" />
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
              <img src="https://static.vecteezy.com/system/resources/previews/025/682/116/original/list-of-diet-plans-with-keto-diet-training-slender-small-body-concept-nutrition-control-and-vegetable-fish-oil-weight-management-individual-diet-service-flat-illustration-vector.jpg" loading="lazy"/>
              <p className="feature-description">
                Receive personalized nutrition guidance based on your health
                status, local diet, and economic conditions.
              </p>
            </div>
          </div>

          
    </div>  )
}
