import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.webp";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);

  const provider = new GoogleAuthProvider();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email);
    console.log(password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
          console.log(user);
          alert('successfully log in');
      })
      .catch((error) => console.error(error));
  };

  const signInGoogle = () => {
    googleSignIn(provider).then((result) => {
      const user = result.user;
      console.log(user);
    }).catch(error => console.error(error));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" srcset="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-20 bg-base-100">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Login" />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Continue with Google"
                onClick={signInGoogle}
              />
            </div>
          </form>
          <p className="text-center">
            New to the account?
            <Link className="text-cyan-500 font-semibold" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
