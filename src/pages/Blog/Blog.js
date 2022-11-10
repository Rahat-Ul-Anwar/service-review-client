import React from "react";

const Blog = () => {
  return (
    <div className="grid w-10/12 mx-auto my-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">1. Difference between SQL and NoSQL?</h2>
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them).
          </p>
          <p>
            NoSQL is a class of DBMs that are non-relational and generally do
            not use SQL.
          </p> 
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">2. What is JWT, and how does it work?</h2>
          <p>
            JWTor JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title">
            3. What is the difference between javascript and NodeJS?
          </h2>
          <p>
            Javascript is a Scripting language.Javascript is a high-level
            programming language that uses the concept of Oops but it is based
            on prototype inheritance
          </p>
          <p>
            NodeJS is a cross-platform and open source Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
        </div>
      </div>
      <div className="card w-2/3 bg-sky-100 shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title">
            {" "}
            4. How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
