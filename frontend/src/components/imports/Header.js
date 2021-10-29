import React from 'react'
import logo from '../assets/ww-logo-off-white-01.png'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="nav">
              <div className="logo-container">
                  <Link to='/'> 
                    <img className="header-logo" src={logo} alt="Wags & Whiskers" />
                  </Link>
              </div>
              <div className="nav-btn-container">
              {/* insert nav ul here */}
              <ul>
                <li><Link to='/login'> Login</Link></li>
                <li><Link to='/register'> Register</Link></li>
                <li><Link to='/account'> Account</Link></li>
              </ul>
              </div>
            </nav>
        </header>
    )
}
