import React from 'react';
import css from 'components/styles/Header.module.css';
import badge from 'assets/Header/badge.svg';

export default function Header({ children }) {
  return (
    <>
      <header className={css.header}>
        <section className={css.navigation}>
          <div className={css.badge}>
            <img src={badge} alt="Hapu Badge" />
          </div>
          <div className={css.navbar}>{children}</div>
        </section>
        <div className={css.userLogin}>
          <a href="#1" className={css.button}>
            Become a Nanny Share Host
          </a>
          <a href="#2" className={css.signin}>
            Sign In
          </a>
        </div>
      </header>
    </>
  );
}
