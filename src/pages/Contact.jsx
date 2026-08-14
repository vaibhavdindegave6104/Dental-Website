import "./Contact.css";


function Contact() {
  return (


    <>
         
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          
          <h1>Contact Us</h1>
          
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="contact-intro">
       
        <h2>How Can We Help You?</h2>
        <p>
          Contact our Clinic for information about
          doctors, appointments, medical services, and other inquiries.
        </p>
      </section>

      {/* Emergency Section */}
      

      {/* Contact Details + Form */}
      <section className="contact-section">
        <div className="contact-container">

    

          {/* Inquiry Form */}
          <div className="contact-form-container">
            <span className="section-tag"></span>
            <h2>Contact To Clinic </h2>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter your subject"
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your inquiry here..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

  

    

      {/* CTA */}
      <section className="contact-cta">
        
        <a href="tel:108" className="cta-button">
          Emergency: 108
        </a>
      </section>

      


      <section className="contact-location">
    <div className="location-container">
      <h2>Hospital Address</h2> 

        <a
            href="https://maps.app.goo.gl/UubawBHgHx7grRz9A"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="/map.png"
                alt="Hospital Location Map"
                className="location-map"
            />
        </a>

        <p>Click on the map to open the location in Google Maps.</p>
    </div>
</section>
    </div>

    </>
  );
}

export default Contact;