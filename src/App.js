import React, { useState } from "react";
import { airContext } from "./Context";
import "./styles/App.scss";
import image1 from "./images/main-image.jpg";
import SubNavbar from "./component/sub-navbar/SubNavbar";
import Navbar from "./component/navbar/Navbar";

function App() {
  const [subNavbarState, setSubNavbarState] = useState(null);
  const [navbarState, setNavbarState] = useState(null);

  return (
    <div className="App">
      <airContext.Provider
        value={{
          subNavbarState,
          setSubNavbarState,
          navbarState,
          setNavbarState,
        }}
      >
        <SubNavbar />
        <Navbar />
      </airContext.Provider>

      <div className="header-warning">
        <a
          href="https://www.airbnb.com/resources/hosting-homes?persona=guest"
          target="_blank"
        >
          <h4>Get the latest on our COVID-19 response</h4>
        </a>
      </div>
      <div className="container">
        <img src={image1}></img>
      </div>
    </div>
  );
}

export default App;
