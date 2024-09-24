import React from 'react';
import Navbar from '../Navbar';
import Anchors from '../assets/Anchors';
import Footer from '../assets/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-4">
            <div className="row align-items-center">
              <div className="col">
                <div className="container mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Contact Me</h3>
                      <hr />
                      <div className="d-flex align-items-center mb-5">
                        <FaMapMarkerAlt size={32} className="text-danger me-3" />
                        <div>
                          <p>
                            R48J+6V, National Institute of Technology Plot No. FA7,Zone, P1, GT
                            Karnal Rd, Delhi, 110036
                          </p>
                          <a
                            href="https://www.google.com/maps/place/National+Institute+of+Technology+Delhi/@28.8139459,77.130541,17z/data=!4m10!1m2!2m1!1snit+dlehji!3m6!1s0x390d1b1923ada2e3:0x1169930518add2fe!8m2!3d28.8162558!4d77.1332341!15sCgluaXQgZGVsaGmSARdlZHVjYXRpb25hbF9pbnN0aXR1dGlvbuABAA!16s%2Fm%2F0l8gg7v?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <FaEnvelope size={32} className="me-3" />
                        <div className="p-2">
                          <a href="mailto:abhishek.nitdelhi@gmail.com" className="mb-3">
                            abhishek.nitdelhi@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <FaLinkedin size={32} className="me-3 text-primary" />
                        <a
                          href="https://www.linkedin.com/in/abhishek-kumar-nitdelhi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaGithub size={32} className="me-3" />
                        <a
                          href="https://github.com/abhiphile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark btn-sm"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2297.856104531341!2d77.13190139107279!3d28.814187689267193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snit%20delhi!5e0!3m2!1sen!2sin!4v1716735638336!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
