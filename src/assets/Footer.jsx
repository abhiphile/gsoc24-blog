import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-light text-dark mt-5 p-4">
      <hr />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h5>Abhishek Kumar | {new Date().getFullYear()}</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <a href="mailto:abhishek.nitdelhi@gmail.com" className="text-dark mx-3">
              <FaEnvelope size={20} />
            </a>
            <a href="https://github.com/abhiphile" className="text-dark mx-3">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-nitdelhi/" className="text-dark mx-3">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col text-center">

            <p>Made with  <FaHeart className='text-danger' /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;