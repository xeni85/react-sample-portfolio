import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
              {/* Header */}
      <header>
        {/* Logo */}
        <div className="logo">
          <h1>Shkelzen Dunisha</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header