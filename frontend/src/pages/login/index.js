import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setpasswordErr] = useState("");
  let [passwordShow, setpasswordShow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setpasswordErr("");
  };

  let handleLogin = () => {
    if (!email) {
      setEmailErr("Email is required");
    } else {
      if (
        !email
          .toLowerCase()
          .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        setEmailErr("Valid Email is required");
      }
    }
    if (!password) {
      setpasswordErr("Password is required");
    } else if (!password.match(/^(?=.*[a-z])/)) {
      setpasswordErr("Password must contain lower case ");
    } else if (!password.match(/^(?=.*[A-Z])/)) {
      setpasswordErr("Password must contain upper case ");
    } else if (!password.match(/^(?=.*[0-9])/)) {
      setpasswordErr("Password must contain number ");
    } else if (!password.match(/^(?=.*[!@#$%^&*])/)) {
      setpasswordErr("Password must contain symbol ");
    } else if (!password.match(/^(?=.{8,})/)) {
      setpasswordErr("Password must be atleast 8 character ");
    }
  };

  let handlePasswordShow = () => {
    setpasswordShow(!passwordShow);
  };

  return (
    <div className="max-w-logincontainer mx-auto md:flex justify-between text-center md:text-start px-2.5 lg:px-0 ">
      <div className="md:w-[350px] md:mt-40">
        <img
          className="md:ml-[-28px] lg:ml-[-35px]"
          src="assets/icons/facebook.svg"
        />
        <p className="font-pop text-sm font-medium md:w-[286px] mt-[-20px]">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      <div className="md:w-[550px] md:mt-36 mt-10">
        <div className="w-full  bg-white rounded-md shadow-md px-4 py-4	">
          <input
            onChange={handleEmail}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md"
            type="email"
            placeholder="Email address or phone number"
          />
          {emailErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5 ">
              {emailErr}
            </p>
          )}

          <div className="relative">
            <input
              onChange={handlePassword}
              className="w-full border border-solid border-bordercolor px-2.5 py-2.5 mt-4 rounded-md"
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
            />
            {passwordShow ? (
              <RiEyeFill
                onClick={handlePasswordShow}
                className="absolute top-8	 right-3.5"
              />
            ) : (
              <RiEyeCloseFill
                onClick={handlePasswordShow}
                className="absolute top-8	 right-3.5"
              />
            )}
          </div>

          {passwordErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5">
              {passwordErr}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-primary py-4 text-white font-pop font-bold text-lg	 mt-4 rounded-md"
          >
            Log In
          </button>
          <Link
            to="/"
            className="font-pop font-medium text-base 	text-center text-primary mt-2 underline block border-b boder-solid-2px pb-8 mb-4"
          >
            Forgotten password?
          </Link>
          <div className="text-center">
            <button className="bg-highlightcolor px-4 py-4 text-white font-pop font-bold text-lg mt-4 rounded-md">
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
