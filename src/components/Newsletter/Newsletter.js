import React from "react";
import Form from "react-bootstrap/Form";
import Aux from "../hoc/Aux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "../Newsletter/Newsletter.module.css";

const newsletter = () => {
  return (
    <Aux>
      <div className={classes.Newsletter}>
        <h2 className="mb-4 pt-4 greenText">
          Subscribe to our newsletter to receieve free stuff!
        </h2>
        <p className="my-4 greenText">
          Enter your full name and email address.
        </p>
        <Form className="my-4 py-4">
          <Row className="justify-content-center">
            <Col>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  placeholder="Full name"
                  className="w-75 mx-auto mb-4 text-center"
                />
                <Form.Text className="text-muted">
                  Please enter your full name.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="w-75 mx-auto mb-4 text-center"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </Aux>
  );
};

export default newsletter;
