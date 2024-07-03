import React, { useState } from 'react';

import './header.css'

function Header({logout}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  

  return (
    <div className='header'>
      <div className="hamburger" onClick={toggleSidebar}>
        <i class="fa-solid fa-bars"></i>
      </div>      
      <div className="logo">
        <img src="https://i.pinimg.com/originals/1e/c1/4b/1ec14b2f580c577479c47b072ba06ae3.png" alt="" />
      </div>    
      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="cat">Category</a></li>
        </ul>
      </div>    
      <div className="user-actions">
        <a href="g"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="j"><i class="fa-regular fa-bell"></i></a>
        <div className="user-icon" onClick={toggleDropdown}>
          <i class="fa-regular fa-user"></i>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>      
      <nav id='n' className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="cat">Category</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header


