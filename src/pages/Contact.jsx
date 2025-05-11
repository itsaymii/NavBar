import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
          .contact {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 880px;
            background-color: black;
            color: white;
            margin-top: -20px;
            font-family: "Arial", sans-serif;
            padding: 20px;
          }

          .contact h1 {
            font-size: 58px;
            margin-top: -50px;
            margin-bottom: 20px;
            background: linear-gradient(to right, #00c3cc, #3372e3, #7426ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .contact-form {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;
            gap: 15px;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-family: "Arial", sans-serif;
          }

          .contact-form input:focus,
          .contact-form textarea:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(0, 195, 204, 0.8);
          }

          .contact-form button {
            padding: 10px 20px;
            background: linear-gradient(to right, #00c3cc, #3372e3, #7426ef);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .contact-form button:hover {
            background: linear-gradient(to right, #7426ef, #3372e3, #00c3cc);
          }
        `}
      </style>
      <div className="contact">
        <h1 data-aos="fade-down">CONTACT ME</h1>
        <form className="contact-form" data-aos="fade-up">
          <input type="text" placeholder="Your Name" required data-aos="fade-right" />
          <input type="email" placeholder="Your Email" required data-aos="fade-right" data-aos-delay="200" />
          <textarea placeholder="Your Message" rows="5" required data-aos="fade-right" data-aos-delay="400"></textarea>
          <button type="submit" data-aos="fade-up" data-aos-delay="600">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;