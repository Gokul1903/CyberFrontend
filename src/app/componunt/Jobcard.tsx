'use client';
import React from "react";
import Image from 'next/image';

interface JobcardProps {
  title: string;
  company: string;
  salary: string;
  experience: string;
  location: string;
  description: string;
  logoUrl?: string;
  postedAgo?: string;
  image:string;
}

const Jobcard: React.FC<JobcardProps> = ({
  title,
  company,
  salary,
  experience,
  description,
  logoUrl = "logo.svg",
  postedAgo = "24h Ago",
  image
}) => {
  const finalLogoUrl = image || logoUrl;
  return (
    <div
  className="shadow-sm p-3 flex flex-col bg-white mb-3"
  style={{ width: "316px", borderRadius: "12px", boxShadow: "0px 0px 14px 0px #D3D3D326" }}
>
  {/* Logo + Posted Ago */}
  <div className="d-flex justify-content-between align-items-start mb-3">
    {/* Logo Container */}
    <div
      style={{
        width: "83.46px",
        height: "82px",
        background: "linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)",
        border: "1px solid #FFFFFF",
        boxShadow: "0px 0px 10.25px rgba(148, 148, 148, 0.25)",
        borderRadius: "13.1786px",
        position: "relative",
      }}
    >
      <Image
        src={finalLogoUrl}
        alt={`${company} logo`}
        width={65.89}
        height={65.89}
        style={{
          position: "absolute",
          top: "8.05px",
          left: "8.79px",
          borderRadius: "100%",
        }}
      />
    </div>

    {/* Posted Badge */}
    <span
      className="text-sm px-2 py-1"
      style={{
        background: "#B0D9FF",
        borderRadius: "10px",
        fontSize: "14px",
        color: "#000",
        height: "fit-content",
      }}
    >
      {postedAgo}
    </span>
  </div>

  {/* Title & Info */}
  <h5 className="fw-bold" style={{ fontSize: "20px", fontWeight: "700" }}>
    {title}
  </h5>
  <p className="text-muted d-flex flex-wrap gap-2 mb-3" style={{ fontSize: "14px", color: "#555555" }}>
    <span><i className="bi bi-person-plus me-1" />{experience}</span>
    <span><i className="bi bi-buildings me-1" />Onsite</span>
    <span><i className="bi bi-stack me-1" />{salary}</span>
  </p>

  {/* Description */}
  <ul className="mb-3" style={{ fontSize: "14px", color: "#555555", lineHeight: "1.4" }}>
    {description.split('\n').map((line, index) => (
      <li key={index} className="mb-1">{line.trim()}</li>
    ))}
  </ul>

  {/* Apply Button */}
  <button
    className="btn btn-primary w-100"
    style={{ borderRadius: "10px", backgroundColor: "#00AAFF", border: "none" }}
  >
    Apply Now
  </button>
</div>

  );
};

export default Jobcard;
