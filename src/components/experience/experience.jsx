import React from "react";
import "./experience.css";

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
      <div className="datascience">
        <h3>Datascience</h3>
          <div className="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>EDA</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Pandas and Numpy</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Pyspark, SQL</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Sklearn</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Tensorflow</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Keras</h4>
              <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Regression</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
             <div>
             <h4>Classification</h4>
              <small className="text-light">Experienced</small>
             </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>NLP</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Basic</small>
              </div>

            </article>
          </div>
        </div>






        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Flask</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>SQL</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Nodejs</h4>
              <small className="text-light">Basic</small>
              </div>

            </article>
            
          </div>
        </div>
        <div className="programming">
          <h3>Programming languages and Coding</h3>
          <div class="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Competetive programming</h4>
              <small className="text-light">Experienced</small>
              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
