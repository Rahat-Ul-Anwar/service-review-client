import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-rahat-ul-anwar.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    
    
    
    

  return (
      <div>
          <h2 className="text-5xl text-center font-semibold my-5">Our Services</h2>
      <div className="grid m-5 py-5 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
          <Link to="/allService"><button className="btn btn-ghost btn-outline">See More</button></Link>
      </div>
      ;
    </div>
  );
};

export default Services;
