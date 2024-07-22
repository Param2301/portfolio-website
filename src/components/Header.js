import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 mb-4">
      <div className="container">
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#">Param Patel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#summary">Summary</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p className="text-center mt-3">+1(782-882-4466) | ParamPatel@dal.ca | <a href="https://linkedin.com" className="text-white"><FaLinkedin /></a> | <a href="https://github.com" className="text-white"><FaGithub /></a></p>
      </div>
    </header>
  );
};

export default Header;
