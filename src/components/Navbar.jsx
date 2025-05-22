import React from "react";
import PropTypes from "prop-types";
// import {a} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <div className="bg-amber-500 h-96">
        <div className="flex justify-end space-x-10 bg-amber-400 p-4">
          <a href="#" className="hover:cursor-pointer text-amber-50">
            {props.title}
          </a>
          <a href="#" className="hover:cursor-pointer text-amber-50">
            About
          </a>
          <a href="#" className="hover:cursor-pointer text-amber-50">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
