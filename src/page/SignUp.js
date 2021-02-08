import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div>
      <div>
        <h2 className="h2 mb-3 font-weight-normal">SIGN UP</h2>
      </div>
      <div>
        <Form>
          <Form.Group as={Row} controlId="signUpFormUserId">
            <Form.Label column sm="1">
              ID
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="signUpFormUserPassword">
            <Form.Label column sm="1">
              Password
            </Form.Label>
            <Col sm="3">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="signUpFormUserPasswordCheck">
            <Form.Label column sm="1">
              Password Check
            </Form.Label>
            <Col sm="3">
              <Form.Control type="password" />
            </Col>
          </Form.Group>

          <Link to="/">
            <Button variant="primary" type="submit">
              COMPLETE
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
