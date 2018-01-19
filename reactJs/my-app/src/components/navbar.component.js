import React, { Component } from 'react';
class Navbar extends Component {

  render() {
    const navMobile = {
      transform: 'translateX(-100%)',
    }
    return (
        <nav className="white" data-role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a >Navbar Link</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav" style={navMobile}>
              <li><a >Navbar Link</a></li>
            </ul>
            <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
           </div>
        </nav>
    );
  }
}

export default Navbar;
