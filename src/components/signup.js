/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import registerAction from '../actions/register';
import Header from './header1';
import Footer from './footer2';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
      phoneNumber: null,
      address: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { register } = this.props;
    register(this.state);
  }

  render() {
    return (
      <>
        <Header />
        <section id="contentform">
          <h2>Create an account</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={this.handleChange} required />
            <br />
            <input type="text" id="lastName" name="lastname" placeholder="Last Name" onChange={this.handleChange} required />
            <br />
            <input type="email" id="email" name="email" placeholder="Email Address" onChange={this.handleChange} required />
            <br />
            <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange} required />
            <br />
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} required />
            <br />
            <input type="text" id="phoneNumber" name="phone" placeholder="Phone Number" onChange={this.handleChange} required />
            <br />
            <input type="address" id="address" name="address" placeholder="Address" onChange={this.handleChange} required />
            <br />
            <button type="submit" className="button1">Create Account</button>
          </form>
          <p>
            Already have an account?
            {' '}
            <Link to="/sign-in">Log in here</Link>
            .
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(registerAction(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Signup);
