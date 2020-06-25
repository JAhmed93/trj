import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../Footer/Footer.css";
import Logo from "../Logo/Logo";

const footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-0 Footer ">
      <MDBContainer
        fluid
        className="text-center text-md-left d-flex justify-content-center"
      >
        <MDBRow>
          <MDBCol>
            <Logo />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> twinrayjstudios.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default footer;
