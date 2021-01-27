import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Utils/Utils';
import AppContext from '../../contexts/AppContext';
import DogApiService from '../../services/dog-api-service';

export default class DogPage extends Component {
  state = {
    dogs: [],
  };

  static contextType = AppContext;
  //new stuff here
  static defaultProps = {
    match: { params: {} },
  };

  handleNewDog = (e) => {
    e.preventDefault();
    const { name, age, breed } = e.target;
    const dog = {
      name: name.value,
      age: age.value,
      breed: breed.value,
    };
    this.props.history.push('/dogs');
    // fetch request here
  };

  componentDidMount() {
    //new stuff begins below
    const { dogId } = this.props.match.params;
    this.context.clearError();
    DogApiService.getDog(dogId)
      .then(this.context.setDog)
      .catch(this.context.setError);
    // new stuff ends here
    // this.setState({
    //   dogs: [
    //     {
    //       name: 'Milo',
    //       breed: 'Corgi',
    //       age: 7,
    //     },
    //   ],
    // });
    // commented out to test new stuff
  }

  componentWillUnmount() {
    this.context.clearDog();
  }

  render() {
    return (
      <Section className="DogPage">
        <h1>Dogs</h1>
        <ul>
          {this.state.dogs.map((dog) => (
            <li>
              {' '}
              <Link to="/goals/dogid">
                {dog.name} {dog.breed} {dog.age} years old
              </Link>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleNewDog}>
          <label for="name">Name:</label>
          <input type="text" name="name"></input>
          <label for="age">Age:</label>
          <input type="text" name="age"></input>
          <label for="breed">Breed:</label>
          <input type="text" name="breed"></input>
          <button>Add New Dog</button>
        </form>
      </Section>
    );
  }
}
