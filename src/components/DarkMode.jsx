import React, { useState } from "react";

export default function DarkMode() {
  const [DarkMode, setDarkMode] = useState({
    color: "white",
    backgroundColor:"black",
  });
  const [btnDarkMode, setbtnDarkMode] = useState("enable darkMode");
  function btnMode() {
    if (DarkMode.color == "white") {
      setDarkMode({
        color: "black",
        backgroundColor: "white",
      });
      setbtnDarkMode("enable white mode");
    } else {
      setDarkMode({
        color:"white",
        backgroundColor:"black",
      });
      setbtnDarkMode("enable dark mode");
    }
  }
  return (
    <>
      <div className="m-10 bg-gray-100 flex items-center justify-center px-4">
        <div style={DarkMode} className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className=" leading-relaxed">
            Welcome to our website! We are passionate about building fast and
            user-friendly applications. Our mission is to deliver high-quality
            software solutions that help businesses grow and succeed.
          </p>
        </div>
      </div>
      <button className="cursor-pointer bg-black rounded-2xl text-white my-5" onClick={btnMode}>
        {btnDarkMode}
      </button>
    </>
  );
}
