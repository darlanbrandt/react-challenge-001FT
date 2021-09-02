import React from 'react';
import css from 'components/styles/NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <nav className={css.navbar}>
      <ul>
        <li>
          <a href="#1">Create Your Nanny Share</a>
        </li>
        <li>
          <a href="#2">Browse Shares</a>
        </li>
        <li>
          <a href="#3">Our Story</a>
        </li>
      </ul>
    </nav>
  );
}
