'use client';

import React, { useEffect, useState } from "react";
import Jobcard from "./Jobcard";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

// Time ago utility
const timeAgo = (dateString) => {
  const now = new Date();
  const postedDate = new Date(dateString);
  const seconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const unit in intervals) {
    const value = intervals[unit];
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }

  return "Just now";
};

const JobList = ({ searchQuery, location, jobType, salaryRange }) => {
  const [jobs, setJobs] = useState([]);
const [filteredJobs, setFilteredJobs] = useState([]);
const[isloading,setisloading]=useState(true);

    useEffect(() => {
  const filtered = jobs.filter((job) => {
    const jobTitle = job.jobTitle?.toLowerCase() || '';
    const jobLocation = job.location || '';
    const jobTypeValue = job.jobType?.toLowerCase() || '';
    const salary = job.salaryRange?.max || 0;

    const matchesSearch =
      !searchQuery || jobTitle.includes(searchQuery.toLowerCase());

    const matchesLocation =
      !location || jobLocation.toLowerCase() === location.toLowerCase();

    const matchesJobType =
      !jobType || jobTypeValue === jobType.toLowerCase();
    console.log((salaryRange[0]*1000)*12 , salary)
    // Match if salary is >= min (even if higher than max)
    const matchesSalary =  (salaryRange[1]*1000)*12 <= salary && (salaryRange[0]*1000)*12 <= salary ;

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  setFilteredJobs(filtered);
}, [jobs, searchQuery, location, jobType, salaryRange]);



  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API_URL}/jobs/viewJob`);
        setisloading(false);
        if (res.data.success) {
          setJobs(res.data.jobs);
        } else {
          alert("Failed to fetch jobs");
        }
      } catch (err) {
        alert("Error fetching jobs: " + err.message);
      }
    };

    fetchJobs();
  }, []);

  if(isloading){
    return(
      <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <div className="spinner-border " role="status">
          <span className="visually-hidden"> Loading...</span>
        </div>

      </div>
    )
  }

  if(filteredJobs.length===0){
    return(
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
                        <h2 style={{color:"#303030"}}>No Jobs Found</h2>
                    </div>
                </div>
            </div>
        </section>
      
        
    )
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {filteredJobs.map((job) => (
  <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={job._id}>
    <Jobcard
      title={job.jobTitle}
      company={job.companyName}
      salary={`${job.salaryRange.max/100000} LPA`}
      experience="1-3 yr Exp"
      location={job.location}
      description={job.jobDescription}
      postedAgo={timeAgo(job.createdAt)}
      image={job.image}
    />
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default JobList;
