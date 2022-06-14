import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <form action="">
        <div>
          <h2 className="text-2xl font-semibold">This is Form</h2>
          <div className="input-group inline-block mt-5 ">
            <label className="text-left block" htmlFor="email">
              Email
            </label>
            <input
              className="w-80 h-16 "
              type="email"
              name=""
              placeholder="Enter your Email"
              id=""
              required
            />
          </div>
          <br />
          <hr className="text-2xl font-bold" />
          <div className="input-group inline-block ">
            <label className="text-left block" htmlFor="password">
              Password
            </label>
            <input
              className="w-80 h-16 "
              type="password"
              name=""
              required
              placeholder="Enter your Password"
              id=""
            />
          </div>
          <input
            className="block p-3 border-solid w-80 border-red-100 border-2 bg-lime-300"
            type="submit"
            value="Login"
            placeholder="Login"
          />
        </div>
        <p className="inline-block mt-5 ">
          New to Website dingo?
          <Link to="/signup" className="text-indigo-700">
            Create and account
          </Link>
        </p>
        <div className=" border-2 rounded-lg flex mt-1  justify-center justify-items-center p-1 mb-2">
          <button className=" flex place-items-center">
            <img
              className="w-7"
              src="https://previews.123rf.com/images/kornienko/kornienko1611/kornienko161100200/66047248-chisinau-moldova-november-16-2016-google-logo-on-pc-screen-google-it-is-the-largest-internet-search-.jpg"
              alt=""
            />{" "}
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
