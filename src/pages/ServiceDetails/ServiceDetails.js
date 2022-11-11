import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {

  const { user } = useContext(AuthContext);
  const serviceDetail = useLoaderData();
  const { _id, title, img, price, description } = serviceDetail;


  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.name.value}`;
    const email = user?.email || "unregistered";
  
    const message = form.message.value;

    const reviews = {
      service: _id,
      customer: name,
      email,
      message,
    };
      
    fetch("http://localhost:5000/orders/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert('order placed successfully');
        }
        console.log(data)
      
      })
      .catch((error) => console.error(error));
  }
  


  
 

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
        <div className="w-1/2 p-4">
          <h1 className="text-4xl font-semibold text-center">Review</h1>
          <div>
      <form onSubmit={handlePlaceOrder}>
      
        <div className="grid gap-5 my-10 grid-cols-1 md:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered w-full"
          />
         <br />
          
          <input
            name="email"
            type="text"
            placeholder="your email"
            className="input input-bordered w-full"
          
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Your review"
            name="message"
          ></textarea>
        </div>
        <input
          className="btn btn-primary my-5"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
