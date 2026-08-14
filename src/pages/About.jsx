import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="dental-about">

      <section className="about-hero">
        <div className="about-hero-content">
          <p>ABOUT VAIBHAV'S DENTAL CLINIC</p>

          <h1>
            Creating Healthy
            <br />
            Smiles For Life
          </h1>

          <span>
            We combine modern dentistry, experienced professionals,
            and compassionate care to give every patient a better
            dental experience.
          </span>
        </div>
      </section>


      <section className="about-story">

        <div className="story-image">
          <img
            src="https://verainterior.com/wp-content/uploads/2024/05/Dental-Clinic-Interior-Design-jpg.webp"
            alt="BrightSmile Dental Clinic"
          />
        </div>

        <div className="story-content">

          <p className="about-label">OUR STORY</p>

          <h2>
            More Than A Dental Clinic
          </h2>

          <p>
            BrightSmile Dental was created with one simple goal:
            to make quality dental care comfortable, accessible,
            and easy for everyone.
          </p>

          <p>
            Our team of experienced dentists uses modern techniques
            and technology to provide safe and effective treatments
            for patients of all ages.
          </p>

          <p>
            From regular dental checkups to advanced procedures,
            we focus on understanding every patient's needs before
            recommending the right treatment.
          </p>

          <Link to="/appointment" className="story-btn">
            Book Your Visit
          </Link>

        </div>

      </section>


      <section className="about-numbers">

        <div className="number-box">
          <h2>15+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="number-box">
          <h2>10K+</h2>
          <p>Patients Treated</p>
        </div>

        <div className="number-box">
          <h2>20+</h2>
          <p>Dental Experts</p>
        </div>

        <div className="number-box">
          <h2>98%</h2>
          <p>Patient Satisfaction</p>
        </div>

      </section>


      <section className="mission-section">

        <div className="mission-heading">
          <p className="about-label">WHAT WE BELIEVE</p>

          <h2>
            Dentistry With A
            <span> Human Touch</span>
          </h2>

          <p>
            We believe good dental care is not only about treating
            teeth. It is about building trust, understanding patients,
            and helping people feel confident about their smile.
          </p>
        </div>

        <div className="mission-cards">

          <div className="mission-card">
            <div className="mission-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To provide reliable and affordable dental care while
              making every patient's visit comfortable and stress-free.
            </p>
          </div>


          <div className="mission-card">
            <div className="mission-icon">👁</div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted dental care destination known for
              quality treatment, modern technology, and happy patients.
            </p>
          </div>


          <div className="mission-card">
            <div className="mission-icon">❤️</div>

            <h3>Our Promise</h3>

            <p>
              To always listen to our patients and provide treatment
              with honesty, compassion, and professional care.
            </p>
          </div>

        </div>

      </section>


      <section className="about-approach">

        <div className="approach-content">

          <p className="about-label">OUR APPROACH</p>

          <h2>
            Your Comfort Comes First
          </h2>

          <p>
            We understand that visiting a dentist can sometimes
            feel uncomfortable or stressful. That's why we focus
            on creating a calm and welcoming environment.
          </p>

          <div className="approach-list">

            <div>
              <strong>01</strong>
              <span>
                <b>Listen</b>
                We understand your dental concerns.
              </span>
            </div>

            <div>
              <strong>02</strong>
              <span>
                <b>Explain</b>
                We clearly explain your treatment options.
              </span>
            </div>

            <div>
              <strong>03</strong>
              <span>
                <b>Treat</b>
                We provide personalized dental treatment.
              </span>
            </div>

          </div>

        </div>

        <div className="approach-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5hG6w0t0AhilgOS_z0ydRsoG3AjIH9za1Qz1-bB-Jw&s=10"
            alt="Dentist providing dental care"
          />
        </div>

      </section>


      <section className="about-cta">

        <div>
          <p>READY FOR A HEALTHIER SMILE?</p>

          <h2>
            Let's Take Care Of Your Smile
          </h2>
        </div>

        <Link to="/appointment">
          Book Appointment →
        </Link>

      </section>

    </div>
  );
}

export default About;