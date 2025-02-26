import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-20 right-10 transition-opacity duration-300 ${
        isShown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex items-center p-4 rounded-lg shadow-lg ${
          type === "delete"
            ? "bg-red-100 border border-red-500"
            : "bg-green-100 border border-green-500"
        }`}
      >
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            type === "delete" ? "bg-red-200" : "bg-green-200"
          }`}
        >
          {type === "delete" ? (
            <MdDeleteOutline className="text-red-500 text-xl" />
          ) : (
            <LuCheck className="text-green-500 text-xl" />
          )}
        </div>
        <p className="ml-3 text-sm text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
