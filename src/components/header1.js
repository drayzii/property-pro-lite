import React from 'react';
import { Link } from 'react-router-dom';

class Header1 extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <h1><Link to="/">Property Pro Lite</Link></h1>
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
              <li><Link to="/sign-up">Create an Account</Link></li>
              <li><Link to="/sign-in">Log In</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header1;
