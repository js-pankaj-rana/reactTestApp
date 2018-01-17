import React, { Component } from 'react';
class Navbar extends Component {
  render() {
    return (
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Navbar Link</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav" styleCss="transform: translateX(-100%);">
              <li><a href="#">Navbar Link</a></li>
            </ul>
           </div>
        </nav>
    );
  }
}

export default Navbar;


