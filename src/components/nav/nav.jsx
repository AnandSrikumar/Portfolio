import React, {useState} from 'react'
import './nav.css'

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="#header"><h2>Srikumar Anand</h2></a>

      <button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          
          <li>
            <a href="#about" onClick={() => {
        setIsNavExpanded(false)
      }}>About</a>
          </li>
          <li>
            <a href="#experience" onClick={() => {
        setIsNavExpanded(false)
      }}>Experience</a>
          </li>
          <li>
            <a href="#services" onClick={() => {
        setIsNavExpanded(false)
      }}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={() => {
        setIsNavExpanded(false)
      }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav
