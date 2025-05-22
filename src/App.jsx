import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";

function App() {
  return (
    <>
      <Navbar title="our home" />
      <TextForm textarea="message" />
    </>
  );
}

export default App;
