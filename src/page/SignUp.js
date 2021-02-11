import axios from 'axios';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';

const SignUp = () => {
  const [MemberId, setMemberId] = useState('');
  const [MemberPassword, setMemberPassword] = useState('');
  const [MemberPasswordCheck, setMemberPasswordCheck] = useState('');

  const handleChangeFormMemberId = (e) => {
    setMemberId(e.target.value);
  };
  const handleChangeFormMemberPassword = (e) => {
    setMemberPassword(e.target.value);
  };
  const handleChangeFormMemberPasswordCheck = (e) => {
    setMemberPasswordCheck(e.target.value);
  };

  const checkPasswordEqual = (password1, password2) => {
    if (password1 != password2) return false;
    return true;
  };

  const handleSubmitSingUp = (e) => {
    e.preventDefault();

    if (!checkPasswordEqual(MemberPassword, MemberPasswordCheck)) {
      alert('비밀번호가 같지 않습니다');
      return;
    }

    axios
      .post('http://localhost:8080/test', {
        id: '',
        memberId: MemberId,
        memberPassword: MemberPassword,
      })
      .then((resp) => {
        const receivedData =
          resp.data.memberId + ' ' + resp.data.memberPassword;
        alert(receivedData);
      });
  };

  return (
    <div>
      <div>
        <h2 className="h2 mb-3 font-weight-normal">SIGN UP</h2>
      </div>
      <div>
        <Form onSubmit={handleSubmitSingUp}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              ID
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" onChange={handleChangeFormMemberId} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              Password
            </Form.Label>
            <Col sm="3">
              <Form.Control
                type="password"
                onChange={handleChangeFormMemberPassword}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              Password Check
            </Form.Label>
            <Col sm="3">
              <Form.Control
                type="password"
                onChange={handleChangeFormMemberPasswordCheck}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            COMPLETE
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
