import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md bg-gray-400 bg-clip-padding backdrop-filter">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blur-500">ChatApp</span>
        </h1>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
