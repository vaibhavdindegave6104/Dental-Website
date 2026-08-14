import "../components/Footer.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    
                     <p> <span className="col">Vaibhav's Dental Clinic</span> </p>
                    <img
                        src="https://verainterior.com/wp-content/uploads/2024/05/Dental-Clinic-Interior-Design-jpg.webp"
                        alt="Clinic img"
                    />

                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/services">Services</Link>
                        </li>


                        <li>
                            <Link to="/directory">Directory</Link>
                        </li>

                        <li>
                            <Link to="/appointment">Appointment</Link>
                        </li>


                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>

                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p> Vaibhav's Dental Clinic</p>
                    <p> +91 75591 64163</p>
                    <p> Dental@gmail.com</p>
                </div>


                <div className="footer-section">
                    <h3>Social Links</h3>


             

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a> <br />
                    <br />
                    <br />

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a> 

                </div>



            </div>

            <hr />
            <p className="copyright">
                @ Vaibhav's Dental Clinic (Dr.Vaibhav Dindegave).
            </p>
        </footer>
    );
}

export default Footer;