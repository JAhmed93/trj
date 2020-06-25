import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Logo from "../Logo/Logo";
import "../Branding/Branding.css";

const branding = () => {
  return (
    <Jumbotron className="mb-0 Branding d-flex flex-column justify-content-center">
      <div className="my-4">
        <Logo />
      </div>
      <h1 className="text-center lead-4 font-weight-bold">
        For Gamers, By Gamers
      </h1>

      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com/TwinRayjStudios/" className="p-4 m-4">
          <i className="fab fa-facebook-square greenIcon"></i>
        </a>
        <a href="https://www.instagram.com/twinrayj/" className="p-4 m-4">
          <i className="fab fa-instagram greenIcon"></i>
        </a>
        <a href="https://twitter.com/TwinsTRS" className="p-4 m-4">
          <i className="fab fa-twitter greenIcon"></i>
        </a>
      </div>
    </Jumbotron>
  );
};

export default branding;
