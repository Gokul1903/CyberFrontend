
import React, { useState, useEffect } from 'react';
import logo from "/logo.svg"; // Ensure the correct path
import { Container, Row, Col } from 'react-bootstrap';
import { IconMapPin, IconChevronDown, IconSearch, IconUser } from '@tabler/icons-react';
import { RangeSlider } from '@mantine/core';
import JobList from './JobList';
import CreateJob from './CreateJob';

const Navbar = () => {
    const [salaryRange, setSalaryRange] = useState([50, 80]);
      const [showModal, setShowModal] = useState(false);
      const [searchQuery, setSearchQuery] = useState('');
const [location, setLocation] = useState('');
const [jobType, setJobType] = useState('');

    
      useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'unset';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [showModal]);
  return (
    <>
    <section className="bg-white" style={{ paddingTop: "150px", backgroundColor: "white",boxShadow: "0px 4px 14px 0px #C6BFBF40" }} > 
    
    <nav className="navbar navbar-expand-lg custom-navbar bg-white " >
        
      <div className="container-fluid d-flex justify-content-between align-items-center px-1">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width={44} height={44.68} />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav " style={{gap:"30px"}}>
            {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item, index) => (
              <li className="nav-item d-flex align-items-center px-1" style={{height:"48px"}} key={index}>
                <a className="nav-link fw-semibold " style={{color:" #303030"}} href="#">{item}</a>
              </li>
            ))}
            
          </ul>
        </div>

        {/* Button */}
        <button className="custom-create-btn" onClick={() => setShowModal(true)}>
          Create Jobs
        </button>
      </div>
    </nav>
    <div className="position-relative  bg-white" >
    <Container className="" >
    <Row className="gx-0 gy-3 align-items-center pb-3">
  {/* Search Field */}
  <Col xs={12} lg={3} className="d-flex align-items-center h-100 px-3">
    <div className="d-flex align-items-center gap-3 w-100">
      <IconSearch size={30} color="#686868" />
      <input
  type="text"
  className="form-control border-0"
  placeholder="Search By Job Title, Role"
  style={{ fontSize: "16px", height: "100%" }}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

    </div>
    
  </Col>
  

  

  {/* Preferred Location */}
  <Col xs={12} lg={3} className="d-flex align-items-center h-100 px-3 " style={{borderLeft:" 2px solid #EAEAEA"}}>
    <div className="d-flex align-items-center gap-3 w-100" style={{height:"48px"}}>
      <IconMapPin size={30} color="#686868" />
      <select
  className="no-border-select text-secondary fw-medium w-100"
  style={{ height: "100%" }}
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="" disabled hidden>
    Preferred Location
  </option>
  <option value="Chennai">Chennai</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Mumbai">Mumbai</option>
</select>

      <IconChevronDown size={25} color="#686868" />
    </div>
    
  </Col>
  

    

  {/* Job Type */}
  <Col xs={12} lg={3} className="vertical-divider d-flex align-items-center h-100 px-3 ">
    <div className="d-flex align-items-center gap-3 w-100" style={{height:"48px"}}>
      <IconUser size={35} color="#686868" />
      <select
  className="no-border-select text-secondary fw-medium w-100"
  style={{ height: "100%" }}
  value={jobType}
  onChange={(e) => setJobType(e.target.value)}
>
  <option value="" disabled hidden>
    Job Type
  </option>
  <option value="Internship">Internship</option>
  <option value="Full Time">Full Time</option>
  <option value="Parttime">Parttime</option>
  <option value="Contract">Contract</option>
</select>

      <IconChevronDown size={25} color="#686868" />
      
    </div>
    
  </Col>
  

    



  {/* Salary Range */}
  
<Col xs={12} lg={3} className="d-flex flex-column justify-content-between px-4  w-25" style={{borderLeft:" 2px solid #EAEAEA"}}>
  <div className="d-flex justify-content-between align-items-center mb-2">
    <span style={{ fontWeight: 500, color: '#000000' }}>Salary Per Month</span>
    <span style={{ fontWeight: 500, color: '#000000' }}>
      ₹{salaryRange[0] }k - ₹{salaryRange[1] }k
    </span>
  </div>
  <RangeSlider
    min={50}
    max={100}
    step={5}
    value={salaryRange}
    onChange={setSalaryRange}
    size="md"
    label={null}
    style={{ flexGrow: 1 }}
    styles={{
      track: {
        backgroundColor: '#000000',
        height: '2px',
      },
      bar: {
        backgroundColor: '#000000',
      },
      thumb: {
        backgroundColor: '#FFFFFF',
        border: '5px solid #000000',
        width: 16,
        height: 16,
      },
    }}
  />
</Col>






</Row>

            </Container>
            </div>
            
    </section>
    <section>
      <JobList
  searchQuery={searchQuery}
  location={location}
  jobType={jobType}
  salaryRange={salaryRange}
/>

    </section>
    {showModal && <CreateJob isOpen={showModal} onClose={() => setShowModal(false)} />}
      
    </>
  );
};

export default Navbar;
