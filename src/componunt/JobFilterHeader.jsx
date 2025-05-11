import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { IconMapPin, IconCurrencyRupee, IconChevronDown, IconSearch, IconUser } from '@tabler/icons-react';

export default function JobFilterHeader() {
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <div className="position-relative  bg-white">
      <Navbar onCreateJobClick={() => setShowModal(true)} />

      <div
        className=" "
        style={{
          minHeight: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Container className="pb-3">
          <Row className="gx-4 gy-3">
            {/* Search Field */}
            <Col xs={12} lg={3} className="d-flex align-items-center gap-2">
              <IconSearch size={20} color="#686868" />
              <input
                type="text"
                className="form-control"
                placeholder="Search By Job Title, Role"
              />
            </Col>

            {/* Preferred Location */}
            <Col xs={12} lg={3} className="d-flex align-items-center gap-2 justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <IconMapPin size={20} color="#686868" />
                <span className="text-secondary fw-medium">Preferred Location</span>
              </div>
              <IconChevronDown size={18} color="#686868" />
            </Col>

            {/* Job Type */}
            <Col xs={12} lg={3} className="d-flex align-items-center gap-2 justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <IconUser size={20} color="#686868" />
                <span className="text-secondary fw-medium">Job Type</span>
              </div>
              <IconChevronDown size={18} color="#686868" />
            </Col>

            {/* Salary Range */}
            <Col xs={12} lg={3}>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Salary Per Month</span>
                <span className="fw-bold">
                  ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
                </span>
              </div>
              <input
                type="range"
                className="form-range"
                min="50000"
                max="100000"
                step="5000"
                value={salaryRange[0]}
                onChange={(e) => setSalaryRange([+e.target.value, salaryRange[1]])}
              />
              <input
                type="range"
                className="form-range mt-1"
                min="50000"
                max="100000"
                step="5000"
                value={salaryRange[1]}
                onChange={(e) => setSalaryRange([salaryRange[0], +e.target.value])}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* {showModal && <CreateJob isOpen={showModal} onClose={() => setShowModal(false)} />} */}
    </div>
  );
}
