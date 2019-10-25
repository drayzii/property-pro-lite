import React from 'react';

class Header1 extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <h1><a href="index.html">Property Pro Lite</a></h1>
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
              <li><a href="/">Create an Account</a></li>
              <li><a href="/">Log In</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header1;
