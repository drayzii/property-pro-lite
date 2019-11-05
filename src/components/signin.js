/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions/login';
import Header from './header1';
import Footer from './footer1';
import Button from './button';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
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
      history.push('/properties');
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
    this.setState({
      buttonDisabled: true,
    });
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <>
        <Header />
        <section id="contentform" onSubmit={this.handleSubmit}>
          <h2>Log In</h2>
          <form>
            <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="Email Address" required />
            <br />
            <input type="password" id="password" name="password" onChange={this.handleChange} placeholder="Password" required />
            <br />
            <Button classes="button1" disabled={buttonDisabled} text="Log in" text2="Logging in" />
          </form>
          <p>
            New member?
            {' '}
            <Link to="/sign-up">Sign Up here</Link>
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
  login: (user) => dispatch(loginAction(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
