import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';

export default class Homepage extends Component {
  state = {
    tasks: [
      {
        id: 1,
        name: 'Milo',
        date: '1 / 25 / 21',
      },
    ],
  };
  componentDidMount() {}

  render() {
    return (
      <Section>
        <h1>Hello, profile.name!</h1>
        <h2>Things to do today:</h2>
        <ul>
          {this.state.tasks.map((task) => {
            return (
              <li>
                {task.name} {task.date}
              </li>
            );
          })}
        </ul>
      </Section>
    );
  }
}
