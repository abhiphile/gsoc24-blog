import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Anchors = () => {
  return (
    <div className="d-flex flex-column bg-light p-3 rounded-4 m-2" style={styles.sidebar}>
      <div>
        <div className="nav-link text-dark fw-bold my-2">
          Phase 1
        </div>
        <div className="ms-3">
          <Link to="/gsoc24-blog/week1" className="nav-link text-primary my-1">
            Week 1
          </Link>
          <Link to="/gsoc24-blog/week2" className="nav-link text-primary my-1">
            Week 2
          </Link>
          <Link to="/gsoc24-blog/week3" className="nav-link text-primary my-1">
            Week 3
          </Link>
        </div>
      </div>
      <div>
        <div  className="nav-link text-dark fw-bold my-2">
          Phase 2
        </div>
        <div className="ms-3">
          <Link to="/gsoc24-blog/week4" className="nav-link text-primary my-1">
            Week 4
          </Link>
          <Link to="/gsoc24-blog/week5" className="nav-link text-primary my-1">
            Week 5
          </Link>
          <Link to="/gsoc24-blog/week6" className="nav-link text-primary my-1">
            Week 6
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '100%',
    maxWidth: '300px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  link: {
    display: 'block',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default Anchors;
