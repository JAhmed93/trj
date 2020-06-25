import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Logo from "../Logo/Logo";
import "../Branding/Branding.css";

const branding = () => {
  return (
    <Jumbotron className="mb-0 Branding d-flex flex-column justify-content-center">
      <div className="mb-4">
        <Logo />
      </div>
      <h1 className="text-center lead-4 font-weight-bold">
        For Gamers, By Gamers
      </h1>
    </Jumbotron>
  );
};

export default branding;
