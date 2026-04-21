import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../../assets/hero.jpg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">
            <span className="gradient-text">Maleesha</span> Rukshan
          </h1>
          <h2 className="hero-subtitle">Software Engineering Student</h2>
          <p className="hero-description">
            I am a passionate software engineering student at the University of Kelaniya, 
            building responsive, user-friendly, and modern web applications. 
            Welcome to my personal portfolio.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in delay-200">
          <div className="hero-image-backdrop"></div>
          <div className="hero-image">
            <img src={profileImage} alt="Maleesha Rukshan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
