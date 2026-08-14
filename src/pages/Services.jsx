

import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="dental-services">

      <section className="services-hero">
        <div className="services-hero-content">

          <p>OUR DENTAL SERVICES</p>

          <h1>
            Complete Care
            <br />
            For Your Smile
          </h1>

          <span>
            From preventive checkups to advanced dental treatments,
            we provide personalized care for patients of every age.
          </span>

          <Link to="/appointment" className="services-hero-btn">
            Book An Appointment →
          </Link>

        </div>

        <div className="services-hero-image">
          <img
            src="https://i0.wp.com/glenburniedentalgroup.com/wp-content/uploads/2023/05/Dentist-detection.webp?fit=850%2C461&ssl=1"
            alt="Dental Treatment"
          />
        </div>
      </section>


      <section className="services-intro">

        <p className="services-label">WHAT WE PROVIDE</p>

        <h2>
          Dental Treatment Designed
          <br />
          Around You
        </h2>

        <p>
          Every smile is different. That's why our dentists take
          time to understand your needs and recommend the right
          treatment for you.
        </p>

      </section>


      <section className="treatment-section">

        <div className="treatment-card featured-treatment">

          <div className="treatment-content">

            <div className="treatment-icon">🦷</div>

            <h3>Preventive Dentistry</h3>

            <p>
              Protect your teeth and gums before problems begin.
              Regular dental examinations and professional cleaning
              help maintain a healthy smile.
            </p>

            <ul>
              <li>Dental Checkups</li>
              <li>Teeth Cleaning</li>
              <li>Gum Care</li>
              <li>Oral Health Screening</li>
            </ul>

          </div>

        </div>


        <div className="treatment-card">


          <div className="treatment-content">

            <div className="treatment-icon">✨</div>

            <h3>Cosmetic Dentistry</h3>

            <p>
              Improve the appearance of your smile with modern
              cosmetic dental treatments.
            </p>

            <ul>
              <li>Teeth Whitening</li>
              <li>Dental Veneers</li>
              <li>Smile Makeover</li>
              <li>Dental Bonding</li>
            </ul>

          </div>

        </div>


        <div className="treatment-card">


          <div className="treatment-content">

            <div className="treatment-icon">😁</div>

            <h3>Orthodontics</h3>

            <p>
              Straighten your teeth and improve your bite with
              comfortable orthodontic solutions.
            </p>

            <ul>
              <li>Traditional Braces</li>
              <li>Clear Aligners</li>
              <li>Retainers</li>
              <li>Bite Correction</li>
            </ul>

          </div>

        </div>


        <div className="treatment-card">

          <div className="treatment-content">

            <div className="treatment-icon">🪥</div>

            <h3>Restorative Dentistry</h3>

            <p>
              Restore damaged or missing teeth and bring back
              your natural smile.
            </p>

            <ul>
              <li>Root Canal Treatment</li>
              <li>Dental Crowns</li>
              <li>Dental Bridges</li>
              <li>Fillings</li>
            </ul>

          </div>

        </div>


        <div className="treatment-card">


          <div className="treatment-content">

            <div className="treatment-icon">🔩</div>

            <h3>Dental Implants</h3>

            <p>
              Replace missing teeth with strong, natural-looking
              dental implants.
            </p>

            <ul>
              <li>Single Tooth Implants</li>
              <li>Multiple Implants</li>
              <li>Implant Crowns</li>
              <li>Implant Consultation</li>
            </ul>

          </div>

        </div>


        <div className="treatment-card">

          <div className="treatment-number">06</div>

          <div className="treatment-content">

            <div className="treatment-icon">👶</div>

            <h3>Children's Dentistry</h3>

            <p>
              Gentle dental care designed to make dental visits
              comfortable for children.
            </p>

            <ul>
              <li>Kids Checkups</li>
              <li>Fluoride Treatment</li>
              <li>Cavity Prevention</li>
              <li>Dental Education</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="care-process">

        <div className="process-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmT_pZpiO1p923A250Ke_x8hKhrgSuj964SQcSVA-Rj6Dg8_IWGs1344&s=10"
            alt="Dentist Consultation"
          />
        </div>

        <div className="process-content">

          <p className="services-label">OUR APPROACH</p>

          <h2>
            Simple Steps To
            <br />
            Better Dental Health
          </h2>

          <div className="process-list">

            <div className="process-item">
              <strong>01</strong>

              <div>
                <h3>Consultation</h3>
                <p>
                  We listen to your concerns and examine your
                  dental health.
                </p>
              </div>
            </div>


            <div className="process-item">
              <strong>02</strong>

              <div>
                <h3>Personalized Plan</h3>
                <p>
                  Our dentist explains the available treatment
                  options clearly.
                </p>
              </div>
            </div>


            <div className="process-item">
              <strong>03</strong>

              <div>
                <h3>Comfortable Treatment</h3>
                <p>
                  We provide the right treatment with your comfort
                  as our priority.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="services-cta">

       

        <Link to="/appointment">
          Book Appointment →
        </Link>

      </section>

    </div>
  );
}

export default Services;