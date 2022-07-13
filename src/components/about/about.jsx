import React from "react";
import "./about.css";
import suit from '../../assets/my_pic1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id="about">
      
        <h5>Get to know</h5>
        <h2>About me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={suit} alt='my image'></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>4+ years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Companies</h5>
              <small>2 Companies</small>
              
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>

          </div>
          <p>Software Engineer with over 4 years of experience in IT industry. Currently working at Techmahindra. Worked on Automation testing, Datascience, Webdevelopment etc. Seeking more experience in datascience to build machine learning models which can automate various tasks in the organization.</p>
        <a href="#contact" class="btn btn-primary">Let's talk</a>
        </div>
        
      </div>
    </section>
  );
};
export default about;
