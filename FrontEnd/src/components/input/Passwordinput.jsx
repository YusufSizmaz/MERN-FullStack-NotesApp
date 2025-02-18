import React, { useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShadowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="flex items-center bg-transparent border border-gray-300 px-5 rounded mb-3">
        <input
          value={value}
          onChange={onChange}
          type={isShowPassword ? "text" : "password"}
          placeholder={placeholder || "Password"}
          className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        />

        {isShowPassword ? (
          <FaRegEye
            size={22}
            className="text-blue-500 cursor-pointer"
            onClick={() => toggleShadowPassword()}
          />
        ) : (
          <FaRegEyeSlash
            size={22}
            className="text-slate-400 cursor-pointer"
            onClick={() => toggleShadowPassword()}
          />
        )}
      </div>
    </>
  );
};

export default PasswordInput;
