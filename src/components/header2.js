/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <h1><Link to="/properties">Property Pro Lite</Link></h1>
          </div>
          <div id="toggle" className="toggle">
            <div>
              <i />
              <i />
              <i />
            </div>

          </div>
          <div id="nav-wrapper" className="nav-wrapper">
            <ul>
              <li><Link to="#" onClick={this.logOut}>Log Out</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header2;
