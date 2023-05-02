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

      
      <div>
        <meta charSet="utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" /> 
       
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={4000}>
              <img src={require("./images/mite-about-slider1.jpg")} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={4000}>
              <img src={require("./images/mite-about-slider2.jpg")} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={4000}>
              <img src={require("./images/mite-about-slider3.jpg")} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={4000}>
              <img src={require("./images/mite-about-slider4.jpg")} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br /><br />
        <section id="header" className="jumbotron text-center">
          <h1 className="display-3"><b>History</b></h1>
          <p className="lead px-1">Mangalore Institute of Technology &amp; Engineering (MITE) established in the year 2007 today stands tall with 3000+ students, 180+ Faculty, offering 8 Undergraduate Programs in Engineering, 2 Post Graduate Programs in Engineering, Master of Business Administration (MBA) and 7 Research Programs. The institution is recognized by All India Council for Technical Education(AICTE), New Delhi and is affiliated to one of India’s largest technical university, Visvesvaraya Technological University (VTU), Belagavi.</p>
          <br />
        </section>
        <section id="header" className="jumbotron text-center" style={{backgroundColor: '#f5f5f5'}}>
          <h1 className="display-3"><b>Vision</b></h1>
          <p className="lead px-1">“To attain perfection in providing Globally Competitive Quality Education to all our Students and also benefit the global community by using our strength in Research and Development“</p>
          <br />
        </section>
        <section id="header" className="jumbotron text-center">
          <h1 className="display-3"><b>Mission</b></h1>
          <p className="lead px-1">“To establish world class educational institutions in their respective domains, which shall be centers of excellence in their Stated and Implied sense. To achieve this objective we dedicate ourselves to meet the Challenges of becoming Visionary and Realistic, Sensitive and Demanding, Innovative and Practical and Theoretical and Pragmatic; 
            All at the same time”</p>
          <br />
        </section>
        <section id="header" className="jumbotron" style={{backgroundColor: '#f5f5f5'}}>
          <h1 className="display-3 text-center"><b>Core Values</b></h1>
          <p className="lead px-1">
          </p><ul className="px-5">
            <li className="lead"><strong>Passion and Commitment:</strong> We strive to work with passion and commitment in all our activities towards the ultimate good of the society.</li>
            <li className="lead"><strong>Making a difference:</strong> We strive to make a positive difference in the lives of all our students and the future generation by going beyond curriculum and academics.</li>
            <li className="lead"><strong>Family culture:</strong> We believe in inculcating and nurturing a ‘MITE FAMILY’ culture among all the staff, students, alumni and all those who associate with us.</li>
            <li className="lead"><strong>Care for the environment:</strong> We strive to work with utmost care for Nature creating a serene and conducive environment for quality education and research.</li>
          </ul>
          <p />
          <br />
          <div>
            <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#3e4551'}}>
              <div className="container p-4 pb-0">
                <section className>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">LOCATION</h5>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.060247318163!2d74.966475!3d13.050621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x258a2e8d6d4b45b0!2sMangalore%20Institute%20of%20Technology%20and%20Engineering%2C%20MITE!5e0!3m2!1sen!2sin!4v1653931678202!5m2!1sen!2sin" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">FEATURED LINKS</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <a href="https://mite.ac.in/naac/" target="_blank" className="text-white">NAAC</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/wp-content/uploads/2021/08/MITE_Mandatory_Disclosure_Aug_2021.pdf" target="_blank" className="text-white">Mandatory Disclosure</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/alumni/" target="_blank" className="text-white">Alumni</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/ek-bharat-shrestha-bharat/" target="_blank" className="text-white">EBSB</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase" />
                      <br />
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <a href="https://mite.ac.in/placements/" target="_blank" className="text-white">Placements</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/audited-accounts-statements/" target="_blank" className="text-white">Audited Account Statements</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/nirf-data/" target="_blank" className="text-white">NIRF</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/stakeholders-feedback/" target="_blank" className="text-white">Stakeholders' Feedback</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">Navigation</h5>         
                      <ul className="list-unstyled mb-0">
                      <li className="py-2">
                        <Link to="/" className="text-white">Home </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/about" className="text-white">About us</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/course" className="text-white">Courses</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/contact" className="text-white">Contact us</Link>
                      </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">Contact details</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <p className="text-white fs-6">Badaga Mijar, Near Moodabidre, Mangalore Tq, DK Dist, Karnataka - 574225</p>
                        </li>
                        <li className="py-2"> 
                          <a href="tel:+91 9741731309/ 9945130850" target="_blank" style={{color: 'white'}}>+91 9741731309/ 9945130850</a>
                        </li>
                        <li className="py-2">
                          <a href="tel:+91 8258 262695/ 96/ 97" target="_blank" style={{color: 'white'}}>+91 8258 262695/ 96/ 97</a>
                        </li>
                        <li className="py-2">
                          <a href="mailto:info@mite.ac.in" target="_blank" style={{color: 'white'}}>info@mite.ac.in</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
              <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2022 Copyright
              </div>
            </footer>
          </div>
        </section></div>
    </div>
  );
};

