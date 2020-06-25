import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Feedback/Feedback.css";

const feedback = () => {
  return (
    <Container fluid className="Feedback">
      <h2 className="mb-4 pt-3 text-center">
        See what people say about our games!
      </h2>

      <Row className=" d-flex mx-auto flex-column">
        <Col className="sm-4 my-4">
          <Card className="CardFeedback">
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
        <Col className="sm-6 my-4 pb-4">
          <Card className="CardFeedback">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p className="scaleText">
                  {" "}
                  Very addictive game. As soon as you pass a few levels you
                  can't stop playing. Good range of difficulty, hope more levels
                  get added soon :-){" "}
                </p>
                <footer className="blockquote-footer">
                  Rebecca McConnell, on Pixel8. .{" "}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default feedback;
