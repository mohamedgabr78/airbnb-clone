import React, { useEffect, useRef, useState } from "react";
import { useAir } from "../../Context";
import SignUp from "../signup/SignUp";
import "./Navbar.scss";

function Navbar() {
  const { navbarState, setNavbarState } = useAir();
  const [clicked, setClicked] = useState({
    item1: false,
    item2: false,
    item3: false,
  });
  const handelDropDown = (dropdownName) => {
    setNavbarState(navbarState !== dropdownName ? dropdownName : null);
  };
  const myref = useRef();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (myref.current && !myref.current.contains(event.target)) {
        setNavbarState(null);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myref]);
  return (
    <div className="navbar" ref={myref}>
      <div className="airbnb">
        <i className="fab fa-airbnb"></i>
        <div>airbnb</div>
      </div>
      <div className="centre-navbar">
        <div
          className={`item ${clicked.item1 ? "active" : ""}`}
          onClick={() => {
            setClicked({ item1: true, item2: false, item3: false });
          }}
        >
          <span>places to stay</span>
          <div className={`line`}></div>
        </div>
        <div
          className={`item ${clicked.item2 ? "active" : ""}`}
          onClick={() => {
            setClicked({ item2: true, item1: false, item3: false });
          }}
        >
          <span>experiences</span>
          <div className={`line`}></div>
        </div>
        <div
          className={`item ${clicked.item3 ? "active" : ""}`}
          onClick={() => {
            setClicked({ item3: true, item2: false, item1: false });
          }}
        >
          <span>online experiences</span>
          <div className={`line`}></div>
        </div>
      </div>
      <div className="left-navbar">
        <div>
          <div>become a host</div>
        </div>
        <div>
          <i className="fas fa-globe"></i>
        </div>
        <div className="user-icon" onClick={() => handelDropDown("account")}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-user-circle"></i>
        </div>
        {navbarState === "account" ? (
          <div className="user-label">
            <div onClick={() => handelDropDown("signup")}>SignUp</div>
            {navbarState === "signup" ? (
              <div>
                <SignUp />
              </div>
            ) : null}

            <div>log in</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
