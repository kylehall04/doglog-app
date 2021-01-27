import React, { Component } from 'react';

const AppContext = React.createContext({
  dogs: [],
  tasks: [],
  isLoggedin: false,
  error: null,
  setDog: () => {},
  clearDog: () => {},
  setTask: () => {},
  clearTask: () => {},
  setError: () => {},
  clearError: () => {},
});

export default AppContext;

export const nullDog = {
  breed: {},
  age: '',
};

export const nullTask = {
  title: '',
};

export class AppProvider extends Component {
  state = {
    dog: nullDog,
    task: nullTask,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setDog = (dog) => {
    this.setState({ dog });
  };

  clearDog = () => {
    this.setDog(nullDog);
  };

  setTask = (task) => {
    this.setState({ task });
  };

  clearTask = () => {
    this.setTask(nullTask);
  };

  render() {
    const value = {
      dog: this.state.dog,
      task: this.state.task,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDog: this.setDog,
      clearDog: this.clearDog,
      setTask: this.setTask,
      clearTask: this.clearTask,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
