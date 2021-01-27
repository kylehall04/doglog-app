import React from 'react';
import { Section } from '../../components/Utils/Utils';

export default function ProfilePage() {
  return (
    <Section className="ProfilePage">
      <h1>Profile</h1>
      <label for="name">Name</label>
      <input id="name"></input>

      <label for="nickname">Nickname</label>
      <input id="nickname"></input>

      <label for="username">Username</label>
      <input id="username"></input>

      <label for="password">Password</label>
      <input id="password"></input>
      <button>Edit Info</button>
    </Section>
  );
}
