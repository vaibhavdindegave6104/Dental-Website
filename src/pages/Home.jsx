import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="dental-home">

      {/* HERO */}
      <section className="dental-hero">
        <div className="hero-content">
          <h3 className="hero-small">WELCOME <span>Vaibhav's</span> DENTAL </h3>

          <h1>
            Your Smile.
            <br />
            Our <span>Priority.</span>
          </h1>

          <p className="hero-text">
            Modern, gentle and affordable dental care for you and
            your entire family. Our experienced team is here to
            help you achieve a healthy and confident smile.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="primary-btn">
              Book Appointment
            </Link>

            <Link to="/services" className="secondary-btn">
              Explore Services
            </Link>
          </div>

          <div className="hero-info">
            <div>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Happy Patients</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Dental Experts</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
            alt="Dental Care"
          />

        </div>
      </section>


      {/* SERVICES */}
      <section className="services-section">
        <div className="section-heading">
          <p>OUR SERVICES</p>
          <h2>Complete Dental Care</h2>
          <span>
            From routine checkups to advanced treatments,
            we provide complete dental solutions.
          </span>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">🦷</div>
            <h3>Teeth Cleaning</h3>
            <p>
              Professional cleaning to remove plaque,
              stains and maintain healthy teeth.
            </p>
            <Link to="/services">Learn More </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Teeth Whitening</h3>
            <p>
              Brighten your smile with safe and effective
              professional whitening treatments.
            </p>
            <Link to="/services">Learn More </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">😁</div>
            <h3>Braces & Aligners</h3>
            <p>
              Straighten your teeth and improve your smile
              with modern orthodontic solutions.
            </p>
            <Link to="/services">Learn More </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🪥</div>
            <h3>Root Canal</h3>
            <p>
              Comfortable root canal treatment designed
              to save damaged and infected teeth.
            </p>
            <Link to="/services">Learn More </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🔩</div>
            <h3>Dental Implants</h3>
            <p>
              Restore missing teeth with natural-looking
              and long-lasting dental implants.
            </p>
            <Link to="/services">Learn More </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">👶</div>
            <h3>Kids Dentistry</h3>
            <p>
              Friendly dental care specially designed
              for children and young patients.
            </p>
            <Link to="/services">Learn More  </Link>
          </div>

        </div>

        <Link to="/services" className="view-services">
          View All Services
        </Link>
      </section>


      {/* WHY CHOOSE US */}
      <section className="why-section">

        <div className="why-image">
          <img
            src="https://verainterior.com/wp-content/uploads/2024/05/Dental-Clinic-Interior-Design-jpg.webp"
            alt="Dental Clinic"
          />
        </div>

        <div className="why-content">
          <p className="section-label">WHY CHOOSE US</p>

          <h2>
            Dental Care You Can
            <span> Trust</span>
          </h2>

          <p>
            We combine experienced dentists, modern technology
            and a patient-first approach to provide comfortable
            and reliable dental care.
          </p>

          <div className="benefit-list">

            <div className="benefit">
             
              <span>
                <strong>Experienced Dentists</strong>
                Skilled professionals with years of experience.
              </span>
            </div>

            <div className="benefit">
             
              <span>
                <strong>Modern Technology</strong>
                Advanced equipment for accurate treatment.
              </span>
            </div>

            <div className="benefit">
          
              <span>
                <strong>Comfortable Treatment</strong>
                We focus on making every visit stress-free.
              </span>
            </div>

            <div className="benefit">
          
              <span>
                <strong>Affordable Care</strong>
                Quality dental treatment at reasonable prices.
              </span>
            </div>

          </div>

          <Link to="/about" className="learn-btn">
            Learn About Us
          </Link>
        </div>

      </section>


      {/* DOCTORS */}
      <section className="doctors-section">

        <div className="section-heading">
          <p>OUR Doctor</p>
          <h2>Meet Our Dental Experts</h2>
          <span>
            Our experienced dental professionals are dedicated
            to giving you the best possible care.
          </span>
        </div>

        <div className="doctor-grid">

          <div className="doctor-card">
            <img
              src="/vaibhav.jpg"
              alt="Dentist"
            />
            <div>
              <h3>Dr. Vaibhav Dindegave</h3>
              <p>Senior Dentist</p>
              <span>12+ Years Experience</span>
            </div>
          </div>

        

        </div>

        <Link to="/directory" className="view-doctors">
          View More info about Doctors
        </Link>

      </section>


      {/* HOW IT WORKS */}
      <section className="steps-section">

        <div className="section-heading">
          <p>SIMPLE PROCESS</p>
          <h2>How It Works</h2>
          <span>
            Getting quality dental care is simple and convenient.
          </span>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Book Appointment</h3>
            <p>
              Select a convenient date and time for your visit.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Meet Your Dentist</h3>
            <p>
              Discuss your dental concerns with our expert.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Get Treatment</h3>
            <p>
              Receive personalized treatment for your smile.
            </p>
          </div>

        </div>

      </section>


      {/* REVIEWS */}
      <section className="reviews-section">

        <div className="section-heading">
          <p>PATIENT STORIES</p>
          <h2>What Our Patients Say</h2>
        </div>

        <div className="review-grid">

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "The doctors were very professional and explained
              everything clearly. The entire experience was
              comfortable."
            </p>
            <h4>— Vaibhav Dindegave</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "Very clean clinic and friendly staff. My treatment
              was smooth and I am very happy with the results."
            </p>
            <h4>— Vinod Savkar</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "I brought my child here and the dentist was very
              patient and caring. Highly recommended."
            </p>
            <h4>—  Jay Swami</h4>
          </div>

        </div>

      </section>


      {/* EMERGENCY CTA */}
      <section className="emergency-section">

       

        <Link to="/appointment" className="emergency-btn">
          Book Appointment →
        </Link>

      </section>

    </div>
  );
}

export default Home;