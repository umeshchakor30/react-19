import Header from "./Header";
import { useCallback, useState } from "react";
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
      {/* Conext API Example */}
      {/* <div style={{ backgroundColor: "yellow", padding: "20px" }}>
        <h1>Context ApI</h1>
        <SubjectContext.Provider value="English in Appp">
          <College></College>
        </SubjectContext.Provider>
      </div> */}

      {/* useCallback vs useMemo */}
      <div>hello</div>
    </div>
  );
}

export default App;
