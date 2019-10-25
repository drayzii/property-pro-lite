import React from 'react';
import Header from './header1';
import Footer from './footer1';

class Signup extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="contentform">
          <h2>Log In</h2>
          <form>
            <input type="email" name="email" placeholder="Email Address" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <a href="properties.html"><button type="button" className="button1">Log In</button></a>
          </form>
          <p>
            New member?
            {' '}
            <a href="signup.html">Sign Up here</a>
            .
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

export default Signup;
