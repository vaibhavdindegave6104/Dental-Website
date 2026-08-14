import { Link } from "react-router-dom";
import "./Directory.css";

function Directory() {
  return (
    <div className="directory-page">

      <section className="directory-hero">
        <div className="directory-hero-content">
          <p>MEET OUR DENTAL EXPERT</p>

          <h1>Dr. Vaibhav Dindegave</h1>

          <h2>Senior Dentist</h2>

          <p>
            Dedicated to providing comfortable, personalized and
            modern dental care for every patient.
          </p>

          <Link to="/appointment" className="directory-btn">
            Book Appointment →
          </Link>
        </div>

        <div className="directory-doctor-image">
          <img
            src="/vaibhav.jpg"
            alt="Dr. Vaibhav Dindegave"
          />
        </div>
      </section>


      <section className="doctor-introduction">

        <div className="doctor-about">

          <p className="directory-label">ABOUT THE DOCTOR</p>

          <h2>
            Dr. Vaibhav Dindegave
          </h2>

          <p>
            Dr. Vaibhav Dindegave is a dedicated dental professional
            focused on providing high-quality and patient-friendly
            dental care.
          </p>

          <p>
            He believes that every patient deserves clear
            communication, personalized treatment and a comfortable
            dental experience.
          </p>

          <p>
            His approach combines modern dental techniques with
            careful attention to each patient's individual needs.
          </p>

        </div>


        <div className="doctor-details">

          <h2>Professional Details</h2>

          <div className="detail-row">
            <strong>Specialization</strong>
            <span>General Dentistry</span>
          </div>

          <div className="detail-row">
            <strong>Experience</strong>
            <span>12+ Years</span>
          </div>

          <div className="detail-row">
            <strong>Qualification</strong>
            <span>BDS</span>
          </div>

          <div className="detail-row">
            <strong>Languages</strong>
            <span>English, Hindi, Marathi</span>
          </div>

          <div className="detail-row">
            <strong>Availability</strong>
            <span>Monday - Saturday</span>
          </div>

        </div>

      </section>


      <section className="expertise-section">

        <div className="expertise-heading">

          <p className="directory-label">
            AREAS OF EXPERTISE
          </p>

          <h2>Dental Care Services</h2>

          <p>
            Dr. Vaibhav provides care across a range of general
            and preventive dental treatments.
          </p>

        </div>


        <div className="expertise-grid">

          <div className="expertise-card">
            <div className="expertise-icon">🦷</div>
            <h3>Dental Checkups</h3>
            <p>
              Complete oral examinations and preventive dental care.
            </p>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">🪥</div>
            <h3>Teeth Cleaning</h3>
            <p>
              Professional cleaning to maintain healthy teeth and gums.
            </p>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">✨</div>
            <h3>Teeth Whitening</h3>
            <p>
              Professional treatments for a brighter and confident smile.
            </p>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">😁</div>
            <h3>Restorative Care</h3>
            <p>
              Treatment for damaged teeth and common dental problems.
            </p>
          </div>

        </div>

      </section>



      <section className="directory-cta">

       

        <Link to="/appointment">
          Book Appointment →
        </Link>

      </section>

    </div>
  );
}

export default Directory;