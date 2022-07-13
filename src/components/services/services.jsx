import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What can I do</h5>
      <h2>Services</h2>
      <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>Datascience</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Can perform EDA to identify data patterns, perform hypothesis testing and visualize the data. </p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Regression: Can perform Regression analysis to identify the relationship between variables.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>NLP: Can classify a given text by using deep learning or classic classification algorithms.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Classification: Can classify a given data by using deep learning or classic classification algorithms.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Timeseries: Can use ARIMA, SARIMAX, XGboost, LSTM to create timeseries models.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Good with pandas, numpy, sql, pyspark. Can perform statistical testing on dataset</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Good with jupyter, aws sagemaker, aws services.</p>
          </li>
          
        </ul>
      </article>
      <article className="service">
        <div className="service_head">
          <h3>Webdevelopment</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Flask: Can deploy python applications with flask.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>React: Can create webapplications with react.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Streamlit: Can create streamlit GUI to deploy a machine larning models.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>GUI: Can create GUI with html, css, react,streamlit.</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service_head">
          <h3>Devops</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Docker: Can setup docker environment on windows, linux and deploy flask applications.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AWS: Familiar with aws services, sagemaker etc. Can use aws boto3 to use aws services in python code.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Heroku: Familiar with deploying web applications on heroku.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Git: Can perform all git operations. Familiar with Version control system.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Jenkins: Implement CI/CD pipelines.</p>
          </li>
        </ul>
      </article>
      </div>
    </section>
  )
}
export default Services
