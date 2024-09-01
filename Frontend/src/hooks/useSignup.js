import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup2 = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleFormErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    console.log(fullname, username, password, confirmPassword, gender);
    if (!success) return;

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4005/api/auth/signup", {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      });
      console.log(res);
      toast.success(`Welcome ${fullname}!`);
    } catch (error) {
      toast.error(`Error Occurred! Please Try Again Later. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { signup2, loading };
};

function handleFormErrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill in all fields");
    return false;
  }
  if (password.length < 8) {
    toast.error("Please enter a password of at least 8 characters");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}

export default useSignup;
