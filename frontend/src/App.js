import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index.js";
import Profile from "./pages/profile/index.js";
import Home from "./pages/home/index.js";
import Registration from "./pages/login/registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
