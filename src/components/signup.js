/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import registerAction from '../actions/register';
import Header from './header1';
import Footer from './footer2';
import Button from './button';

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
      buttonDisabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const { auth } = this.props;
    const { buttonDisabled } = this.state;
    if (auth.error === true && buttonDisabled === true) {
      this.setState({
        buttonDisabled: false,
      });
    }
    if (auth.token) {
      localStorage.setItem('token', auth.token);
      const { history } = this.props;
      history.push('/');
    }
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
    this.setState({
      buttonDisabled: true,
    });
  }

  render() {
    const { buttonDisabled } = this.state;
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
            <Button classes="button1" disabled={buttonDisabled} text="Sign up" text2="Signing up" />
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

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(registerAction(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
