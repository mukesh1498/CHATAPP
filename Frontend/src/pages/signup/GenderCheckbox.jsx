import React from "react";

const GenderCheckbox = ({ oncheckboxchange, selectedGender }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-4">
        <div>
          <label className="label gap-2 cursor-pointer pl-1" htmlFor="male">
            <span className="label-text text-blue-500">Male</span>
            <input
              id="male"
              type="checkbox"
              checked={selectedGender === "male"}
              onChange={() => oncheckboxchange("male")}
              className="radio border rounded-md text-blue-600 focus:ring-blue-500"
              //   className="checkbox border-slate-900"
            />
          </label>
        </div>
        <div>
          <label className="label gap-2 cursor-pointer" htmlFor="female">
            <span className="label-text text-pink-500">Female</span>
            <input
              id="female"
              type="checkbox"
              name="gender"
              checked={selectedGender === "female"}
              onChange={() => oncheckboxchange("female")}
              className="radio border rounded-md text-blue-600 focus:ring-blue-500"

              //   className="checkbox border-slate-900"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;
