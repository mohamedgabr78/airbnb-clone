import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="airbnb">
        <i className="fab fa-airbnb"></i>
        <div>airbnb</div>
      </div>
      <div className="centre-navbar">
        {" "}
        <div>places to stay</div>
        <div>experiences</div>
        <div>online experiences</div>
      </div>
      <div className="left-navbar">
        <div>
          <div>become a host</div>
        </div>
        <div>
          <i className="fas fa-globe"></i>
        </div>
        <div className="user-icon">
          <i className="fas fa-bars"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
