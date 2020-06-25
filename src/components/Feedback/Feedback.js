import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Feedback/Feedback.css";

const feedback = () => {
  return (
    <Container fluid className="Feedback pb-4 h-100">
      <h2 className="mb-4 pt-3 text-center">
        See what people say about our games!
      </h2>
      <Container className="h-75">
        <Row className=" d-flex mx-auto flex-column mb-4">
          <Col className="sm-4">
            <Card className="CardFeedback m-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p className="scaleText">
                    {" "}
                    Excellent game This game is great! I can't stop playing. The
                    graphics are awesome. The game play is challenging and
                    addictive. Nicely done!{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Google User, on Kaplooey! Mastermind.{" "}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm-4">
            <Card className="CardFeedback m-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p className="scaleText">
                    {" "}
                    Very addictive game. As soon as you pass a few levels you
                    can't stop playing. Good range of difficulty, hope more
                    levels get added soon :-){" "}
                  </p>
                  <footer className="blockquote-footer">
                    Rebecca McConnell, on Pixel8.{" "}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm-4">
            <Card className="CardFeedback m-4">
              <Card.Img variant="top" />
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p className="scaleText">
                    {" "}
                    This game is the pinnacle of gaming innovation. I'm not sure
                    how long it's been since I first started playing but there
                    definitely wasn't snow on the ground. I lost my job and my
                    wife left me at some point but when that ball goes into the
                    hole my life has meaning again. As mere humans we are not
                    worthy of such an experience as this. I weep because as a
                    species we are close to extinction since no-one will be
                    leaving their house ever again after playing this game. Then
                    I get the ball in the hole again and the warm fuzzy feeling
                    of success makes all the bad feelings become a fleeting
                    memory.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Matt VanErt, on 'Maze Balls.{" "}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default feedback;
