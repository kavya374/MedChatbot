import React, { useEffect, useState } from "react";
import { Upload,ArrowUpRight } from "lucide-react";
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
            Sephina uses advanced AI to provide accessible medical assistance
            and personalized nutrition guidance, helping reduce health
            disparities across the globe.
          </p>
          <button className="sephbutton">Try Sephina<ArrowUpRight size={28} className="feature-icon" /></button>
        </div>
      </section>

      <section class="abt">
      <h2>About Us</h2>
        <p class="mission">
          We are a mission-driven organization dedicated to leveraging
          Artificial Intelligence (AI) to bridge global health disparities. Our
          focus is on improving healthcare access and nutrition in
          underprivileged regions, empowering communities to lead healthier
          lives.
        </p>
        
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We believe in using technology for social good. By combining AI
            innovation with a deep understanding of local contexts, we aim to
            create a world where everyone, regardless of socio-economic status,
            has access to quality healthcare and nutrition.
          </p>
          <p>
            Join us in building a healthier, more equitable future—one community at a time.
        </p>
         
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div class="testimonials-container">
          <div class="testimonial">
            <img src={client1} alt="Client Photo" />
            <p class="name">John Doe</p>
            <p class="review">
              "This service is amazing! Highly recommended for anyone looking
              for quality and professionalism."
            </p>
            <div class="stars">⭐⭐⭐⭐</div>
          </div>

          <div class="testimonial">
            <img src={client2} alt="Client Photo" />
            <p class="name">Sarah Smith</p>
            <p class="review">
              "Fantastic experience! The team was professional and the results
              exceeded my expectations."
            </p>
            <div class="stars">⭐⭐⭐⭐⭐</div>
          </div>

          <div class="testimonial">
            <img src={client3} alt="Client Photo" />
            <p class="name">Michael Brown</p>
            <p class="review">
              "Great service with excellent customer support. I will definitely
              come back!"
            </p>
            <div class="stars">⭐⭐⭐</div>
          </div>
        </div>
      </section>
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
