import React from 'react';
import Header from './header1';
import Footer from './footer1';

class Signup extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="contentform">
          <h2>Create an account</h2>
          <form>
            <input type="text" name="firstname" placeholder="First Name" />
            <br />
            <input type="text" name="lastname" placeholder="Last Name" />
            <br />
            <input type="email" name="email" placeholder="Email Address" />
            <br />
            <input type="password" name="password1" placeholder="Password" />
            <br />
            <input type="password" name="password2" placeholder="Confirm Password" />
            <br />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <br />
            <input type="address" name="address" placeholder="Address" />
            <br />
            <a href="properties.html"><button type="button" className="button1">Create Account</button></a>
          </form>
          <p>
            Already have an account?
            {' '}
            <a href="/">Log in here</a>
            .
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

export default Signup;
