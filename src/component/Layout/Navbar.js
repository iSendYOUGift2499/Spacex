import React from 'react';
import './Navbar.css'; 
import ss from '../Pages/Assets/dd.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={ss} alt="SpaceX " className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/launches">Launches</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/overview">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/communication">Communication</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
