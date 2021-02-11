import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';

import '../css/Login.css';

const Login = () => {
  return (
    <div className="login">
      <h1 className="h1 mb-3 font-weight-bold">타자 게임 세상</h1>
      <h2 className="h2 mb-3 font-weight-normal">LOGIN</h2>
      <div>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              ID
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" />
            </Col>
          </Form.Group>

          <Link to="/signUp">
            <Button variant="primary" type="submit">
              SIGN UP
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
