import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import Logo from "../Logo/Logo";
import "./Toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="gray" variant="dark">
        <Navbar.Brand href="#home" className="greenText">
          TwinRayJ Studios
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={this.toggleLogoHander}
          className=""
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div className="mr-auto">
            <Logo />
          </div>
          <Nav>
            <Nav.Link
              href="http://twinrayjstudios.com/Games.html"
              className="greenText"
            >
              Games
            </Nav.Link>
            <Nav.Link
              href="http://www.twinrayjstudios.com/Team.html"
              className="greenText"
            >
              Team
            </Nav.Link>
            <Nav.Link
              href="http://twinrayjstudiosstore.mybigcommerce.com/?ctk=284ff2e7-caa2-4435-8cde-3ebd1ed51348"
              className="greenText"
            >
              Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Toolbar;
