import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import use from "../../hooks/useSignup";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const oncheckboxchange = (gender) => {
    setFormData({ ...formData, gender: gender });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { loading, signup2 } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var success = await signup2(formData);
    if (success) {
      alert("Signup Successfull");
    } else {
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blur-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <GenderCheckbox
            oncheckboxchange={oncheckboxchange}
            selectedGender={formData.gender}
          />
          <div className="mt-4">
            <button
              type="submit"
              className="btn  btn-block btn-sm mt-2 border border-slate-700"
            >
              Sign Up
            </button>
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? <span>Login</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
