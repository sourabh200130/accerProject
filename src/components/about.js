import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ContactUsPage.css';
import Map from './MITE_Logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function UserHome({ userData }) {
  
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
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
                  <button onClick={logOut} class="btn btn-outline-success ms-2 ms-sm-0">
                    Log Out
                  </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div className="bg-light">
      <h2>Offering truly Global Education since 15 years</h2>
      <p>
        Mangalore Institute of Technology & Engineering (MITE) established in
        the year 2007 today stands tall with 3000+ students, 180+ Faculty,
        offering 10 Undergraduate Programs in Engineering, 3 Post Graduate
        Programs in Engineering, Master of Business Administration (MBA),
        Master of Computer Applications (MCA) and 7 Research Programs. The
        institution is recognized by All India Council for Technical
        Education(AICTE), New Delhi and is affiliated to one of India’s
        largest technical university, Visvesvaraya Technological University
        (VTU), Belagavi.
      </p>
      <h3>AICTE Approval:</h3>
      <p>LOA : 2007-08</p>
      <p>
        EOA : 2008-09 || 2009-10 || 2010-11 || 2011-12 || 2012-13 || 2013-14 ||
        2014-15 || 2015-16 || 2016-17 || 2017-18 || 2018-19 || 2019-20 ||
        2020-21 || 2021-22 || 2022-23
      </p>
      <h3>Vision:</h3>
      <p>
        “To attain perfection in providing Globally Competitive Quality
        Education to all our Students and also benefit the global community by
        using our strength in Research and Development“
      </p>
      <h3>Mission:</h3>
      <p>
        “To establish world class educational institutions in their respective
        domains, which shall be centers of excellence in their Stated and
        Implied sense. To achieve this objective we dedicate ourselves to meet
        the Challenges of becoming Visionary and Realistic, Sensitive and
        Demanding, Innovative and Practical and Theoretical and Pragmatic; All
        at the same time”
      </p>
      <h3>Core Values:</h3>
      <ul>
        <li>
          <strong>Passion and commitment:</strong> We strive to work with
          passion and commitment in all our activities towards the ultimate
          good of the society.
        </li>
        <li>
          <strong>Making a difference:</strong> We strive to make a positive
          difference in the lives of all our students and the future generation
          by going beyond curriculum and academics.
        </li>
        <li>
          <strong>Family culture:</strong> We believe in inculcating and
          nurturing a ‘MITE FAMILY’ culture among all the staff, students,
          alumni and all those who associate with us.
        </li>
        <li>
          <strong>Care for the environment:</strong> We strive to work with
          utmost care for Nature creating a serene and conducive environment
          for quality education and research.
        </li>
      </ul>
    </div>
    </div>  
    
  );
};

