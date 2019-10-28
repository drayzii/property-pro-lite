import React from 'react';
import { Link } from 'react-router-dom';

class Header2 extends React.Component {
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
              <li><Link to="/">&#43; New Advert</Link></li>
              <li><Link to="/">My Adverts</Link></li>
              <li><Link to="/">Log Out</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header2;
