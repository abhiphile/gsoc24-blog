import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light align-items-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/gsoc24-blog/">
            <div className="row align-items-center">
              <img
                width={50}
                height={25}
                className="col"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/1920px-Google_Summer_of_Code_sun_logo_2022.svg.png"
              />
              <div className="col">GSoC 2024 Blog</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/gsoc24-blog">
                Home
              </Link>
              <Link className="nav-link" to="/gsoc24-blog/about">
                About Me
              </Link>
              <Link className="nav-link" to="/gsoc24-blog/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/gsoc24-blog/resume">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
