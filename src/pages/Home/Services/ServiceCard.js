import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, title, img, price, description } = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" className="p-4 w-96 h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."} </p>
            ) : (
              <p> {description}</p>
            )}
          </p>
          <h3 className="text-xl font-semibold"> Price : ${price}</h3>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}><button className="btn btn-primary">See More</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
