import React from 'react'
import './Navbar.css'
import Logo from '/assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import Hamburger from '/assets/shared/icon-hamburger.svg'
import Closed from '/assets/shared/icon-close.svg'

const Navbar = ({navBar, setNavBar}) => {
  

  return (
    <div className='nav'>
      <div>
        <img src={Logo} alt="ovalstar" className="logo" />
      </div>
      <div className='line'></div>          
              <div className='nav__link large'>
                  
                  <ul className='nav__link--list'>
                      <li><NavLink to="/" isActive={() => isActive ? "active" : ""}><span>00</span> Home</NavLink></li>
                      <li><NavLink to="/destination" isActive={() => isActive ? "active" : ""}><span>01</span> Destination</NavLink></li>
                      <li><NavLink to="/crew" isActive={() => isActive ? "active" : ""}><span>02</span> Crew</NavLink></li>
                      <li><NavLink to="/technology" isActive={() => isActive ? "active" : ""}><span>03</span> Technology</NavLink></li>
                  </ul>
              </div>

      {
        !navBar ? (
          <img className='nav__ham' src={Hamburger} onClick={() => setNavBar(true)} />
        ) : (
          <div className='nav__link'>
            <img className='nav__close' src={Closed} onClick={() => setNavBar(false)} />

            <ul className='nav__link--list'>
              <li><NavLink to="/" activeClassName="active"
                onClick={() => setNavBar(false)}
              ><span>00</span> Home</NavLink></li>
              <li><NavLink to="/destination" activeClassName="active"
                onClick={() => setNavBar(false)}
              ><span>01</span> Destination</NavLink></li>
              <li><NavLink to="/crew" activeClassName="active"
                onClick={() => setNavBar(false)}
              ><span>02</span> Crew</NavLink></li>
              <li><NavLink to="/technology" activeClassName="active"
                onClick={() => setNavBar(false)}
              ><span>03</span> Technology</NavLink></li>
            </ul>
          </div>
        )
      }

    </div>
  )
}

export default Navbar