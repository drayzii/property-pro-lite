import React from 'react';
import Header from './header1';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="contentform">
          <div className="welcome">
            <p>
            Property Pro Lite is a platform where people can create and search properties for sale
            </p>
            <a href="/"><button type="button" className="button1">Create Account</button></a>
            <a href="/"><button type="button" className="button2">Log In</button></a>
          </div>
        </section>
      </>
    );
  }
}

export default LandingPage;
