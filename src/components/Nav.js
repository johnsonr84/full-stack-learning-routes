import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../img/navLogoWhite.png'
import NavStyles from './styles/NavStyles'

export default function Nav() {
  return (
    <NavStyles>
      <div className="links">
        <div className="navLogo">
          <Link to="/">
            {/* <img src={logo} alt="site brain logo" /> */}
          </Link>
        </div>
        <Link to="/javascript">JavaScript</Link>
      </div>
    </NavStyles>
  )
}
