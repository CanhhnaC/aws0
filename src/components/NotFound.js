import React from 'react';

import Styles from '../styles.module.css';

const EmptyState = () => (
  <article className={Styles.notfound}>
    <h1>Not Found</h1>
    <p>
      We can't find what you're looking for. Bummer.
    </p>
  </article>
);

export default EmptyState;
