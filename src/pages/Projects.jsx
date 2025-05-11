import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dance1 from "../components/Images/Dance1.mp4"; 
import Dance2 from "../components/Images/Dance2.mp4";
import Dance3 from "../components/Images/Dance3.mp4";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <style>
        {`
          body, html {
            overflow: hidden; 
            height: 100%; 
          }
          .projects {
            width: 100%;
            height: 880px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: black;
            color: white;
            margin-top: -20px;
            padding: 20px;
            font-family: "Arial", sans-serif;
          }

          .projects h1 {
            font-size: 55px;
            margin-top: -50px;
            margin-bottom: 20px;
            background: linear-gradient(to right, #00c3cc, #3372e3, #7426ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .video-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 50px;
            margin-top: 30px;
          }

          .video {
            width: 360px;
            height: 460px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }

          .video-title {
            color: white;
            font-size: 18px;
            text-align: center;
            margin-top: 10px;
            font-family: "Arial", sans-serif;
          }
        `}
      </style>
      <div className="projects">
        <h1 data-aos="fade-down">MY VIDEOS</h1> 
        <div className="video-container">
          <div data-aos="fade-up"> 
            <video className="video" controls>
              <source src={Dance1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div data-aos="fade-up" data-aos-delay="200"> 
            <video className="video" controls>
              <source src={Dance2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div data-aos="fade-up" data-aos-delay="400"> 
            <video className="video" controls>
              <source src={Dance3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;