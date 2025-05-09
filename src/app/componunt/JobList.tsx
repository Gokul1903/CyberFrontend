'use client';

import React, { useEffect, useState } from "react";
import Jobcard from "./Jobcard";
import axios from "axios";

interface Job {
  _id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryRange: {
    min: string;
    max: string;
  };
  applicationDeadline: string;
  jobDescription: string;
  createdAt: string;
  image:string // 👈 Add this
}

// Utility function to calculate posted time
const timeAgo = (dateString: string) => {
  const now = new Date();
  const postedDate = new Date(dateString);
  const seconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }
  return "Just now";
};

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://cyberbackend-vgru.onrender.com/jobs/viewJob");
        if (res.data.success) {
          setJobs(res.data.jobs);
        } else {
          alert("Failed to fetch jobs");
        }
      } catch (err) {
        alert("Error fetching jobs"+err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {jobs.map((job) => (
            <div className="col-sm-12 col-md-4 col-lg-3" key={job._id}>
              <Jobcard
                title={job.jobTitle}
                company={job.companyName}
                salary={`${job.salaryRange.max}LPA`}
                experience={"1-3 yr Exp"}
                location={job.location}
                description={job.jobDescription}
                postedAgo={timeAgo(job.createdAt)}
                image={job.image}
                // 👈 Pass calculated time
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
