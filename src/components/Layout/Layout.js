import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Toolbar from "../Toolbar/Toolbar";
import Carousel from "../Carousel/Carousel";
import Branding from "../Branding/Branding";
import Feedback from "../Feedback/Feedback";
import NewsLetter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  render() {
    return (
      <Aux>
        <header>
          <Toolbar></Toolbar>
        </header>
        <main>
          <Branding />
          <Carousel></Carousel>
          <Feedback></Feedback>
          <NewsLetter></NewsLetter>
        </main>
        <Footer></Footer>
      </Aux>
    );
  }
}

export default Layout;
