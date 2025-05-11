import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RedGif from "../components/Images/RedGif.gif";
import AimeeImage from "../components/Images/Aimee.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <style>
        {`
          body, html {
            overflow-x: hidden; 
          }
          .home {
            background-color: rgb(0, 0, 0);
            color: white;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            margin: 0;
            margin-top: -20px;
          }

          .home-text {
            font-size: 76px;
            font-weight: bold;
            font-family: "Arial", sans-serif;
            line-height: 1.1;
            margin-left: -300px;
            margin-top: -300px;
            text-align: left;
            background: linear-gradient(to bottom, #00c3cc, #3372e3, #7426ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .logo {
            position: absolute;
            top: -90px;
            left: -10px;
            width: 300px;
            height: auto;
          }

          .red-gif {
            position: absolute;
            width: 900px;
            height: 800px;
            margin-left: -857px;
            margin-top: 1200px;
          }

          .aimee-image {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 946px;
            margin-top: 1200px;
            position: absolute;
            width: 910px;
            height: 800px;
          }
            
        `}
      </style>
      <div className="home">
        <div className="home-text" data-aos="fade-up">
          TO DANCE IS TO FEEL <br />
          ALIVE IN EVERY BEAT. IT'S <br />
          WHERE EMOTION MEETS ENERGY.
        </div>
        <img
          src={RedGif}
          alt="Red GIF"
          className="red-gif"
          data-aos="fade-left" 
        />
        <img
          src={AimeeImage}
          alt="Aimee Rose"
          className="aimee-image"
          data-aos="fade-right" 
        />
      </div>
    </>
  );
};

export default Home;