import React from "react";
import "../index.css"; 
import { Link } from "react-router-dom";
import Logo from "../components/Images/Logo.png"; 
const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            height: 100vh;
            width: 50px;
            background-color: black;
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }

          .navbar-logo {
            width: 190px;
            margin-top: -60px; 
            margin-left: 20px;
            height: auto;
            margin-bottom: 20px; /* Add spacing below the logo */
          }

          .navbar ul {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 90px;
            height: 100%;
            justify-content: center;
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .navbar li {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
            margin-top: 20px;
          }

          .navbar a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-family: Inter;
            font-weight: 600;
            transform: rotate(-90deg); 
            display: inline-block; 
            padding: 10px 20px; 
            border-radius: 5px; 
            transition: background 0.3s ease; 
          }

          .navbar a:hover {
            background: linear-gradient(to right, #00c3cc, #3372e3, #7426ef); 
            text-decoration: none; 
          }
        `}
      </style>
      <div className="navbar">
        <img src={Logo} alt="Logo" className="navbar-logo" /> 
        <ul>
          <li><Link to="/contact"> CONTACT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/">HOME</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;