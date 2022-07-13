import React from 'react'
import './footer.css'
import {FiHome} from 'react-icons/fi'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
     <a href="/"><FiHome/></a>
     
     <div className="react-cont">
      <h3>Made with React</h3>
     <FaReact className='react-cont-icon'/>
     </div>
     <h4>&copy; Anand</h4>
    </footer>
  )
}

export default Footer
