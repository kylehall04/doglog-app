import React from 'react';
import { Section } from '../../components/Utils/Utils';

export default function NotFoundPage() {
  return (
    <Section className="NotFoundPage">
      <h2>Page not found</h2>
      <p>
        {' '}
        This page either does not exist or is missing! Please navigate
        elsewhere.
      </p>
    </Section>
  );
}
