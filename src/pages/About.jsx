import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AimeeRose from "../components/Images/AimeeRose.jpg"; 
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <style>
        {`
          body, html {
          overflow-x: hidden;
            height: 100%; 
          }

          .about {
            display: flex;
            flex-direction: row; 
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: black;
            color: white;
            padding: 20px;
            margin-top: -20px;
            width: 100%;
            text-align: center;
            font-size: 34px;
            font-family: "Arial", sans-serif;
          }

          .about-image {
            width: 400px;
            height: auto;
            border-radius: 10px;
            margin-right: 20px;
            transition: box-shadow 0.5s ease; 
          }

          .about-image:hover {
            box-shadow: 0 0 15px 1px white; 
          }

          .about-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 700px;
          }

          .about h1 {
            font-size: 64px;
            font-weight: bold;
            margin-bottom: 20px;
            margin-left: -300px;
            font-family: Arial, sans-serif;
            background: linear-gradient(to bottom, #00c3cc, #3372e3, #7426ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-text {
            font-size: 20px;
            line-height: 1.6;
            margin-left: 30px;
            text-align: left;
            font-family: "Arial", sans-serif;
            max-width: 700px;
          }

        `}
      </style>
      <div className="about">
        <img
          src={AimeeRose} 
          alt="Aimee"
          className="about-image"
          data-aos="fade-right"
        />
        <div className="about-content" data-aos="fade-left"> 
          <h1 data-aos="fade-up">ABOUT ME</h1> 
          <p className="about-text" data-aos="fade-up">
            Dancing is not just a passion; it’s my way of life. From the moment I
            step onto the floor, I feel alive. Every beat, every rhythm, and every
            movement tells a story. As a dancer, I strive to express emotions that
            words cannot capture. It’s where my soul meets the music, and together,
            we create magic. Whether it’s contemporary, hip-hop, or freestyle, I
            pour my heart into every performance, connecting with the audience and
            leaving a piece of myself on the stage.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;