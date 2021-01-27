import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Section } from '../../components/Utils/Utils';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/home';
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h1>DogLog</h1>
        <p>An organizer for man's best friends</p>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <Link to="/register">Register</Link>
      </Section>
    );
  }
}
