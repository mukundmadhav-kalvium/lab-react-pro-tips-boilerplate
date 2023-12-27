import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "99%",
        background: "white",
        color: "black",
        padding: "7px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1>
          KALVIUM
          <img
            src="https://kalvium.community/images/sidebar-3d-logo.svg"
            alt=""
          />
        </h1>
      </Link>

      <div style={{ display: "flex",justifyContent: "space-between", gap: "10px", width: "30%"}}>
        <Link to={"/contacts"} style={{ textDecoration: "none" }}>
          <h1 style={{ cursor: "pointer" }}>Contacts</h1>
        </Link>

        <Link to={"/RegistrationForm"} style={{ textDecoration: "none" }}>
          <h1 style={{ cursor: "pointer" }}>Registration Form</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
