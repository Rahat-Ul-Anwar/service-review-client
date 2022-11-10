import React from "react";
import img from "../../../assets/Travelling-to-the-World.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-slate-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/3">
          <img src={img} className=" rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Go outside!!</h1>
          <p className="py-6">
          A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
