import Header from "./Header";
import { useState } from "react";
import User from "./UserComponent";
import { College } from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";
// import { Counter } from "./Counter";
import Skills from "./Skills";
import Clock from "./Clock";
import Products from "./Products";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormDemo from "./FormDemo";

import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { SubjectContext } from "./ContextData";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ backgroundColor: "yellow", padding: "20px" }}>
        <h1>Context ApI</h1>
        <SubjectContext.Provider value="English">
          <College></College>
        </SubjectContext.Provider>
      </div>
    </div>
  );
}

export default App;
