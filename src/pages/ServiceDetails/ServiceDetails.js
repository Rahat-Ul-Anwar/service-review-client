import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetail = useLoaderData();
  const { title, img, price, description } = serviceDetail;

  return (
    <div className=" hero min-h-screen bg-emerald-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/3">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt="" className="p-4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <h3 className="text-xl font-semibold"> Price : ${price}</h3>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Go outside!!</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
