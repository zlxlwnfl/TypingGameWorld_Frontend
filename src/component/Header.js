import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import '../css/Header.css';

const Header = () => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/signUp'
  ) {
    return null;
  }

  return (
    <div className="header">
      <div className="menu">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="title h1 mb-3 font-weight-bold">
            TypingGameWorld
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Game" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  산성비 주룩주룩
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  스피드 받아쓰기
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Board</Nav.Link>
              <NavDropdown title="Member" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  회원 정보
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">로그아웃</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
