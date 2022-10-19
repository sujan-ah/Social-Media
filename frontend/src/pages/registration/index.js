import { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";

const Registration = () => {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [year, setYear] = useState(new Date().getFullYear());
  let [byear, setByear] = useState("");
  let [bmonth, setBmonth] = useState("");
  let [bday, setBday] = useState("");
  let [gender, setGender] = useState("");
  let [passwordShow, setpasswordShow] = useState(false);
  let [err, setErr] = useState("");
  let [success, setSuccess] = useState("");

  let handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  let handleLastName = (e) => {
    setLastname(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handlePasswordShow = () => {
    setpasswordShow(!passwordShow);
  };

  let handleYear = (e) => {
    setByear(e.target.value);
  };

  let handleMonth = (e) => {
    setBmonth(e.target.value);
  };

  let handelDays = (e) => {
    setBday(e.target.value);
  };

  let handleGender = (gender) => {
    setGender(gender);
  };

  let handleRegister = async () => {
    try {
      let { data } = await axios.post("http://localhost:8000/register", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        bYear: byear,
        bMonth: bmonth,
        bDay: bday,
        gender: gender,
      });
      setErr("");
      setSuccess(data.message);

      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");

      setBday("");
      setBmonth("");
      setByear("");
      setGender("");
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  const years = Array.from(new Array(60), (val, index) => year - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const days = Array.from(
    new Array(new Date(byear, bmonth, 0).getDate()),
    (val, index) => 1 + index
  );

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
            onChange={handleFirstName}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md "
            type="text"
            placeholder="First Name"
            value={firstname}
          />

          <input
            onChange={handleLastName}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md mt-4"
            type="text"
            placeholder="Last Name"
            value={lastname}
          />

          <input
            onChange={handleEmail}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md mt-4"
            type="email"
            placeholder="Email address or phone number"
            value={email}
          />

          <div className="relative">
            <input
              onChange={handlePassword}
              className="w-full border border-solid border-bordercolor px-2.5 py-2.5 mt-4 rounded-md"
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
              value={password}
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

          <p className="font-pop font-regular text-base mt-3 mb-3">
            Date of birth:
          </p>
          <div className="flex gap-x-5">
            <div className="relative">
              <select
                onClick={handelDays}
                className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md appearance-none	"
              >
                <option>Day</option>
                {days.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-3 right-3.5" />
            </div>

            <div className="relative">
              <select
                onChange={handleMonth}
                className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md appearance-none	"
              >
                <option>Month</option>
                {months.map((item, index) => (
                  <option value={item} key={index}>
                    {item == 1 && "January"}
                    {item == 2 && "February"}
                    {item == 3 && "March"}
                    {item == 4 && "April"}
                    {item == 5 && "May"}
                    {item == 6 && "June"}
                    {item == 7 && "July"}
                    {item == 8 && "August"}
                    {item == 9 && "Septembar"}
                    {item == 10 && "Octobar"}
                    {item == 11 && "Novembar"}
                    {item == 12 && "Decembar"}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-3 right-3.5" />
            </div>

            <div className="relative">
              <select
                onChange={handleYear}
                className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md appearance-none	"
              >
                <option>Year</option>
                {years.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-3 right-3.5" />
            </div>
          </div>

          <p className="font-pop font-regular text-base mt-3 mb-3">Gender:</p>
          <div className="flex gap-x-5 mb-5 relative">
            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base">Male</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="absolute top-4 right-3.5"
                  onChange={() => handleGender("male")}
                />
              </div>
            </div>

            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base ">Female</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="absolute top-4 right-3.5"
                  onChange={() => handleGender("female")}
                />
              </div>
            </div>
            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base">Custom</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="absolute top-4 right-3.5"
                  onChange={() => handleGender("custom")}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-primary py-4 text-white font-pop font-bold text-lg	 mt-4 rounded-md"
          >
            Sign Up
          </button>
          {err && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5 ">
              {err}
            </p>
          )}
          {success && (
            <p className="border border-solid bg-emerald-600	 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5 ">
              {success}
            </p>
          )}
          <Link
            to="/"
            className="font-pop font-medium text-base 	text-center text-primary mt-2 underline block border-b boder-solid-2px pb-8 mb-4"
          >
            Forgotten password?
          </Link>
          <div className="text-center">
            <Link
              to="/login"
              className="inline-block bg-highlightcolor px-4 py-4 text-white font-pop font-bold text-lg mt-4 rounded-md"
            >
              Already have
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
