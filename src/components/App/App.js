import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import DogPage from '../../routes/DogPage/DogPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import GoalPage from '../../routes/GoalPage/GoalPage';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import AppContext from '../../contexts/AppContext';

export default class App extends Component {
  state = {
    hasError: false,
    isLoggedIn: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  setIsLoggedIn = (newvalue) => {
    this.setState({
      isLoggedIn: newvalue,
    });
  };

  render() {
    const contextValue = {
      isLoggedIn: this.state.isLoggedIn,
      setIsLoggedIn: this.setIsLoggedIn,
    };
    return (
      <AppContext.Provider value={contextValue}>
        <div className="App">
          {this.state.isLoggedIn ? <Header /> : null}
          <main className="App__main">
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <Route path={'/home'} component={HomePage} />
              <Route exact path={'/'} component={LoginPage} />
              <Route path={'/register'} component={RegistrationPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/goals" component={GoalPage} />
              <Route path="/dogs" component={DogPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}
