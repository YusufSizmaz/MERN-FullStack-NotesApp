import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/input/Passwordinput";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-gray-300 rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7">Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm bg-transparent px-5 py-3 rounded mb-5 border border-gray-300 focus:border-gray-400 outline-none"
            />

            <PasswordInput />

            <button
              type="submit"
              className="w-full text-md border border-gray-300 px-5 py-3 rounded mb-4 outline-none bg-blue-500 text-white hover:bg-blue-600"
            >
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link
                to="/signUp"
                className="font-medium text-blue-500 underline hover:text-blue-800"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
