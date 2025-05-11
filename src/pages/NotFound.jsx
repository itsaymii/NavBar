import React from "react";

const NotFound = () => {
  return (
    <>
      <style>
        {`
          .not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: black;
            color: white;
            font-family: "Arial", sans-serif;
            text-align: center;
          }

          .not-found h1 {
            font-size: 72px;
            margin-bottom: 20px;
            background: linear-gradient(to right, #00c3cc, #3372e3, #7426ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .not-found p {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .not-found a {
            color: #00c3cc;
            text-decoration: none;
            font-size: 18px;
            border: 1px solid #00c3cc;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .not-found a:hover {
            background: #00c3cc;
            color: black;
          }
        `}
      </style>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/">Go Back to Home</a>
      </div>
    </>
  );
};

export default NotFound;