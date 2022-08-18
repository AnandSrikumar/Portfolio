import React from "react";
import "./header.css";
import mypic1 from "../../assets/side.jpg";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import cv from '../../assets/srikumar_anand_resume_p.pdf'

const Header = () => {
  return (
    <section id="header">
      <div className="info-container">
        <h4>Hello, I'm</h4>
        <h1>Anand</h1>
        <h4>Datascientist</h4>
      </div>
      <div className="button-row">
        <div className="button-container">
          <a href={cv} className="btn" download>
            Download Resume
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
      <div className="social-row">
      <div className="soc-icons">
          <a target="_blank" href="https://www.linkedin.com/in/anand-srikumar-81a498109/"><BsLinkedin/></a>
          <a target="_blank"  href="https://www.facebook.com/anand.srikumar.56"><BsFacebook/></a>
          <a target="_blank"  href="https://github.com/AnandSrikumar"><BsGithub/></a>
        </div>
        <div className="me">
          <img src={mypic1} alt="mypic"></img>
        </div>
        <div className="scroll-down">
          <h5>
          <a href="#contact">Scroll down</a>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Header;
