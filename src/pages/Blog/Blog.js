import React from "react";

const Blog = () => {
  return (
    <div className="grid w-10/12 mx-auto mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Difference between SQL and NoSQL?</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
