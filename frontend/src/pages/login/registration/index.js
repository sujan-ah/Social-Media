import { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Registration = () => {
  let [firstname, setFirstname] = useState("");
  let [firstnameErr, setFirstnameErr] = useState("");
  let [lastname, setLastname] = useState("");
  let [lastnameErr, setlastnameErr] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [year, setYear] = useState(new Date().getFullYear());
  let [byear, setByear] = useState("");
  let [bmonth, setBmonth] = useState("");
  let [bday, setBday] = useState("");
  let [gender, setGender] = useState("");

  let [male, setMale] = useState("");
  let [female, setFemale] = useState("");
  let [custom, setCustom] = useState("");

  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setpasswordErr] = useState("");
  let [passwordShow, setpasswordShow] = useState(false);
  let [dateofbirthErr, setDateofbirthErr] = useState("");
  let [genderErr, setgenderErr] = useState("");

  let handleFirstName = (e) => {
    setFirstname(e.target.value);
    setFirstnameErr("");
  };

  let handleLastName = (e) => {
    setLastname(e.target.value);
    setlastnameErr("");
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setpasswordErr("");
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

  let handleMale = (e) => {
    setMale(e.target.value);
  };

  let handleFemale = (e) => {
    setFemale(e.target.value);
  };

  let handleCustom = (e) => {
    setCustom(e.target.value);
  };

  let handleLogin = () => {
    if (!firstname) {
      setFirstnameErr("First Name is required");
    }
    if (!lastname) {
      setlastnameErr("Last Name is required");
    }
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

    if (!bday) {
      setDateofbirthErr("Please choose a day");
    } else if (!bmonth) {
      setDateofbirthErr("Please give a month");
    } else if (!byear) {
      setDateofbirthErr("Please give a year");
    } else if (byear) {
      if (new Date().getFullYear() - byear < 18) {
        setDateofbirthErr("Your age must be greater than or equel 18");
      } else {
        setDateofbirthErr("");
      }
    }

    if (!male && !female && !custom) {
      setgenderErr("Please choose a gender");
    } else {
      setgenderErr("");
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
          />
          {firstnameErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5 mb-2.5">
              {firstnameErr}
            </p>
          )}

          <input
            onChange={handleLastName}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md mt-4"
            type="text"
            placeholder="Last Name"
          />
          {lastnameErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5 mb-2.5">
              {lastnameErr}
            </p>
          )}

          <input
            onChange={handleEmail}
            className="w-full border border-solid border-bordercolor px-2.5 py-2.5 rounded-md mt-4"
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

          {dateofbirthErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5">
              {dateofbirthErr}
            </p>
          )}

          <p className="font-pop font-regular text-base mt-3 mb-3">Gender:</p>
          <div className="flex gap-x-5 mb-5 relative">
            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base">Male</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="absolute top-4 right-3.5"
                  onChange={handleMale}
                />
              </div>
            </div>

            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base ">Female</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="absolute top-4 right-3.5"
                  onChange={handleFemale}
                />
              </div>
            </div>
            <div className="px-4 py-2.5 relative w-[150px] border border-solid border-[#D9D9D9] rounded-md">
              <p className="font-pop font-regular text-base">Custom</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="absolute top-4 right-3.5"
                  onChange={handleCustom}
                />
              </div>
            </div>
          </div>

          {genderErr && (
            <p className="border border-solid bg-rose-500 px-2.5 py-2.5 rounded-md text-white font-pop font-regular mt-2.5">
              {genderErr}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-primary py-4 text-white font-pop font-bold text-lg	 mt-4 rounded-md"
          >
            Sign Up
          </button>
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
