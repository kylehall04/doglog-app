import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Utils/Utils';
import Goals from '../../components/Goals/Goals';

export default function GoalPage() {
  return (
    <Section className="GoalPage">
      <h1>Goals</h1>
      <Link to="/dogs/1">Milo</Link>
    </Section>
  );
}
