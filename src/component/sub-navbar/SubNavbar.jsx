import React, { useEffect, useRef, useState } from "react";
import { useAir } from "../../Context";
import { LinkedCalendar } from "rb-datepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./SubNavbar.scss";
import image1 from "../../images/image.webp";
function SubNavbar() {
  const { subNavbarState, setSubNavbarState } = useAir();
  const [count, setCount] = useState({
    adultNumber: 0,
    childNumber: 0,
    InfantsNumber: 0,
  });
  const myref = useRef();

  const onDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate });
  };
  const handelDropDown = (dropdownName) => {
    setSubNavbarState(subNavbarState !== dropdownName ? dropdownName : null);
  };

  const handelCountplus = (countName) => {
    setCount({ ...count, [countName]: count[countName] + 1 });
  };
  const handelCountminus = (countName) => {
    setCount({ ...count, [countName]: count[countName] - 1 });
  };

  function handleClickOutside(event) {
    if (myref.current && !myref.current.contains(event.target)) {
      setSubNavbarState(null);
    }
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myref]);

  const guestRowsType = [
    {
      title: "adults",
      fnp: () => handelCountplus("adultNumber"),
      fnm: () => handelCountminus("adultNumber"),
      count: count.adultNumber,
    },
    {
      title: "children",
      fnp: () => handelCountplus("childNumber"),
      fnm: () => handelCountminus("childNumber"),
      count: count.childNumber,
    },
    {
      title: "animals",
      fnp: () => handelCountplus("InfantsNumber"),
      fnm: () => handelCountminus("InfantsNumber"),
      count: count.InfantsNumber,
    },
  ];

  const renderGuestRow = () => {
    return guestRowsType.map((row) => {
      return (
        <div className="guests-row">
          <div className="guests-label">{row.title}</div>
          <button
            className={`${row.count <= 0 ? "btn-disabled" : ""}`}
            onClick={() => {
              row.count > 0 && row.fnm();
            }}
          >
            <i class="fas fa-minus-circle"></i>
          </button>
          <div>{row.count}</div>
          <button
            onClick={() => {
              row.fnp();
            }}
          >
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      );
    });
  };

  return (
    <div className="sub-navbar" ref={myref}>
      <div
        className={`subnavbar-item ${
          subNavbarState === "nearby" ? "active" : ""
        }`}
        onClick={() => handelDropDown("nearby")}
      >
        location
      </div>
      <div className="sperator"></div>
      <div
        className={`subnavbar-item ${
          subNavbarState === "calendar" ? "active" : ""
        }`}
        onClick={() => handelDropDown("calendar")}
      >
        check in
      </div>
      <div className="sperator"></div>
      <div
        className={`subnavbar-item ${
          subNavbarState === "calendar" ? "active" : ""
        }`}
        onClick={() => handelDropDown("calendar")}
      >
        check out
      </div>
      <div className="sperator"></div>
      <div
        className={`subnavbar-item ${
          subNavbarState === "guests" ? "active" : ""
        }`}
        onClick={() => handelDropDown("guests")}
      >
        guests
      </div>
      {subNavbarState === "nearby" ? (
        <div className="nearby">
          <div className="location-image">
            <img src={image1} />
          </div>
        </div>
      ) : null}
      {subNavbarState === "calendar" ? (
        <LinkedCalendar
          onDatesChange={onDatesChange}
          showDropdowns={false}
          className="calendar"
        />
      ) : null}
      {subNavbarState === "guests" ? (
        <div className="guests-container">{renderGuestRow()}</div>
      ) : null}

      <div className={`search-bar ${subNavbarState !== null ? "active" : ""}`}>
        {subNavbarState !== null ? <h3>search</h3> : null}
        <i className="fas fa-search" />
      </div>
    </div>
  );
}

export default SubNavbar;
