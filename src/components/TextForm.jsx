import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export default function TextForm(props) {
  const handleuppercase = (event) => {
    let a = text.toUpperCase();
    setText(a);
  };
  const handlelowercase = (event) => {
    let a = text.toLowerCase();
    setText(a);
  };
  const handleclearletter = (event) => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOneChar = () => {
    if (text.length > 0) {
      const newText = text.slice(0, -1);
      setText(newText);
    }
  };

  const [text, setText] = useState("");
  return (
    <>
    
      <div className="max-w-sm mx-auto">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {props.textarea}
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="flex">
          <button
            type="button"
            className=" bg-black text-white  m-2"
            onClick={handleuppercase}
          >
            Convert Uppercase
          </button>
          <button
            type="button"
            className=" bg-black text-white m-2"
            onClick={handlelowercase}
          >
            Convert LowerCase
          </button>
          <button
            type="button"
            className=" bg-black text-white m-2"
            onClick={handleclearletter}
          >
            Clear letter
          </button>
          <button
            type="button"
            className=" bg-black text-white m-2"
            onClick={handleOneChar}
          >
            Clear One Char
          </button>
        </div>
        <div className="mx-20 ">
          <h1>your text summary:</h1>
          <p>
            {text.split(" ").length} word and {text.length} char
          </p>
        </div>
      </div>
    </>
  );
}
