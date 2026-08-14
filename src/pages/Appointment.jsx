import "./Appointment.css";


function Appointment() {
  return (
        
<>
         
    <div className="appointment-page">
      <section className="appointment-hero">
        <div className="appointment-hero-content">
          
          <h1>Book an Appointment</h1>
        
        </div>
      </section>
      <section className="appointment-section">
        
        <div className="appointment-container">
          
          <div className="appointment-form-card">
            <h2>Appointment Request</h2>
            
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <select>
                    <option value="">Select department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>General Medicine</option>
                    <option>Dermatology</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Doctor</label>
                  <select>
                    <option value="">Select doctor</option>
                    <option>Dr. Rahul Sharma</option>
                    <option>Dr. Priya Reddy</option>
                    <option>Dr. Arjun Kumar</option>
                    <option>Dr. Sneha Rao</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Appointment Date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <select>
                  <option value="">Select preferred time</option>
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>2:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 5:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label>Reason for Visit</label>
                <textarea placeholder="Briefly describe your reason for the appointment"></textarea>
              </div>
              <button type="submit" className="appointment-btn">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>
      <section className="appointment-note">
        
         
        <a href="/contact" className="contact-btn">Contact Clinic   </a>
      </section>
    </div>
     
    </>
  );
}

export default Appointment;