'use client';
import React, { useState } from "react";
import axios from "axios";
import "./CreateJob.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateJob: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token") || "gftgftyfft"; // If using token auth
      const res = await axios.post("https://cyberbackend-vgru.onrender.com/jobs/addJob", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });
      alert(res.data.message);
      onClose();
      window.location.reload();

    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 d-flex align-items-center justify-content-center backdrop-blur-sm bg-dark bg-opacity-50">
      <div className="modal-overlay">
        <div className="create-job-modal position-relative bg-white p-4 rounded-4 shadow-custom">
          
          <h2 className="text-center fw-bold mb-4 text-dark">Create Job Opening</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label" style={{fontSize:"20px" ,fontWeight:"500"}}>Job Title</label>
              <input name="jobTitle" style={{width:"376px",height:"58px",borderRadius: "10px",border: "1px solid #BCBCBC"}} value={formData.jobTitle} onChange={handleChange} type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Company Name</label>
              <input name="companyName" style={{width:"376px",height:"58px",borderRadius: "10px",border: "1px solid #BCBCBC"}} value={formData.companyName} onChange={handleChange} type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Location</label>
              <select name="location" style={{width:"376px",height:"58px",appearance: "auto",borderRadius: "10px",border: "1px solid #BCBCBC"}}  value={formData.location} onChange={handleChange} className="form-control" >
                <option value="choos">Choose Preferred Location</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Job Type</label>
              <select name="jobType" style={{width:"376px",height:"58px",borderRadius: "10px",border: "1px solid #BCBCBC"}} value={formData.jobType} onChange={handleChange} className="form-select">
                <option value="choos">Choose Job type</option>
                <option value="Internship">Internship</option>
                <option value="Full Time">Full Time</option>
                <option value="Parttime">Parttime</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="col-md-6">
  <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Salary Range</label>
  <div className="d-flex gap-2">
    <input 
      name="salaryMin" 
      style={{ flex: 1, height: "58px", borderRadius: "10px" ,border: "1px solid #BCBCBC"}} 
      value={formData.salaryMin} 
      onChange={handleChange} 
      type="number" 
      min={100000} 
      className="form-control" 
      placeholder="⇅ 1,00,000"
    />
    
    <input 
      name="salaryMax" 
      style={{ flex: 1, height: "58px", borderRadius: "10px",border: "1px solid #BCBCBC" }} 
      value={formData.salaryMax} 
      onChange={handleChange} 
      type="number" 
      min={100000} 
      max={1200000} 
      className="form-control" 
      placeholder="⇅ ₹12,00,000" 
    />
  </div>
</div>
            <div className="col-md-6">
                
              <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Application Deadline</label>
              <input name="applicationDeadline" style={{width:"376px",height:"58px",borderRadius: "10px",border: "1px solid #BCBCBC"}} onKeyDown={(e) => e.preventDefault()} value={formData.applicationDeadline} onChange={handleChange} type="date" placeholder="." className="form-control" />
            </div>
          </div>

          <div className="mt-4">
            <label className="form-label" style={{fontSize:"20px",fontWeight:"500"}}>Job Description</label>
            <textarea name="jobDescription" style={{width:"768px",height:"169px",borderRadius: "10px",border: "1px solid #BCBCBC"}} value={formData.jobDescription} onChange={handleChange} className="form-control" rows={4} placeholder="Please share a description to let the candidate know more about the job role"></textarea>
          </div>
          {/* <div className="flex items-center space-x-2">
  <label htmlFor="imageUpload" className="cursor-pointer">
    <i className="bi bi-card-image text-xl text-gray-600"></i>
  </label>
  <input
    id="imageUpload"
    name="imageUrl"
    onChange={handleChange}
    accept="image/*"
    type="file"
    className="hidden" // hide the actual file input
  />
</div> */}



          <div className="d-flex justify-content-between mt-3">
            <button style={{width:"232px",height:"59px",borderRadius: "10px"}} className="btn btn-outline-secondary px-4" onClick={onClose}>Save Draft <i className="bi bi-chevron-double-down"></i></button>
            <button style={{width:"207px",height:"59px",borderRadius: "10px"}} className="btn btn-primary px-5" onClick={handleSubmit}>Publish <i className="bi bi-chevron-double-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
