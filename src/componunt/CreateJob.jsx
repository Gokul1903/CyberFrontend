import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const CreateJob = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    jobDescription: "",
    imageUrl: ""
  });
  

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token") || "default-token";
      const res = await axios.post(`${API_URL}/jobs/addJob`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(res.data.message);
      onClose();
      window.location.reload();
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : "Something went wrong";
      alert(errMsg);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="create-job-modal" >
        <form onSubmit={handleSubmit}>
        <h2 className="text-center fw-bold mb-4" style={{fontSize:"24px"}}>Create Job Opening</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}} >Job Title</label>
            <input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter job title"
              required
              style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}}>Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter company name"
              required
              style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}}>Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-select"
              required
              style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
              
            >
              <option value="">Choose Preferred Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}}>Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="form-select"
              required
              style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
            >
              <option value="">Choose Job type</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
              <option value="Parttime">Parttime</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}}>Salary Range</label>
            <div className="d-flex gap-2">
              <input
                name="salaryMin"
                value={formData.salaryMin}
                onChange={handleChange}
                type="number"
                min={100000}
                className="form-control"
                placeholder="⇅ ₹1,00,000"
                required
                step={50000}
                style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC",
                

              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}

              />
              <input
                name="salaryMax"
                value={formData.salaryMax}
                onChange={handleChange}
                type="number"
                min={100000}
                max={1200000}
                className="form-control"
                placeholder="⇅ ₹12,00,000"
                required
                step={50000}
                style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-medium" style={{fontSize:"20px"}}>Application Deadline</label>
            <input
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              onKeyDown={(e) => e.preventDefault()}
              type="date"
              className="form-control"
              required
              style={{
                height:"58px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="form-label fw-medium" style={{fontSize:"20px"}}>Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="form-control"
            rows={4}
            placeholder="Please share a description about the job role"
            required
            style={{
                height:"169px",
                borderRadius:"10px",
                fontSize:"18px",
                color:" #BCBCBC"
              }}
              onFocus={(e) => e.target.style.color = "#222222"}
                onBlur={(e) => e.target.style.border = "1px solid #BCBCBC"}
          />
        </div>

        {/* Optional Image Upload Field */}
        {/* 
        <div className="mt-3">
          <label htmlFor="imageUpload" className="form-label">Upload Image</label>
          <input
            id="imageUpload"
            name="imageUrl"
            onChange={handleChange}
            accept="image/*"
            type="file"
            className="form-control"
          />
        </div>
        */}

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" style={{height:"59px",width:"232px",fontSize:"20px"}} onClick={onClose}>
            Save Draft <i className="bi bi-chevron-double-down"></i>
          </button>
          <button type="submit" style={{height:"59px",width:"207px",fontSize:"20px"}} className="btn btn-primary">
                Publish <i className="bi bi-chevron-double-right"></i>
            </button>

        </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
