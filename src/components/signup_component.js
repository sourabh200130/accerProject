import React, { Component, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
            window.location.href = "./sign-in";
          } else {
            alert("Already have an account with this Email");
          }
        });
    }
  };

  return (
    <div>
    <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Edu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Courses">Course</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              pattern="[A-Za-z]*"
              title="Must contain only alphabets"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              pattern="[A-Za-z]*"
              title="Must contain only alphabets"
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
