/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header1';
import Footer from './footer1';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      const { history } = this.props;
      history.push('/properties');
    }
  }

  render() {
    return (
      <>
        <Header />
        <section id="contentform">
          <div className="welcome">
            <p>
            Property Pro Lite is a platform where people can create and search properties for sale
            </p>
            <Link to="/sign-up"><button type="button" className="button1">Create Account</button></Link>
            <Link to="/sign-in"><button type="button" className="button2">Log In</button></Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
