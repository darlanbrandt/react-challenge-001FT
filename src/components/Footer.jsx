import React from 'react';
import css from 'components/styles/Footer.module.css';
import calendarImg from 'assets/Footer/calendar.svg';
import hapuLogo from 'assets/Footer/hapu-logo.svg';
import facebookLogo from 'assets/Footer/facebook-logo.svg';
import instagramLogo from 'assets/Footer/instagram-logo.svg';
import twitterLogo from 'assets/Footer/twitter-logo.svg';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <h3>Become a nanny share host</h3>
        <p>Takes less than 5 minutes to get started</p>
        <button className={css.button}>
          <img src={calendarImg} alt="Calendar" className={css.calendar} />
          <div>
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>
        <a href="#1">Or browse local nanny-shares</a>
        <section className={css.footerInfo}>
          <div className={css.logo}>
            <img src={hapuLogo} alt="Hapu logo" />
          </div>
          <div className={css.links}>
            <a href="#2">Share Your Nanny</a>
            <a href="#3">Our Story</a>
            <a href="#3">Blog</a>
            <a href="#4">Terms & Privacy</a>
          </div>
          <div className={css.social}>
            <a href="http://www.facebook.com">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
            <a href="http://www.twitter.com">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
            <a href="http://www.instagram.com">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </div>
        </section>
        <div className={css.divider}></div>
        <div className={css.copyright}>
          <span>Copyright © 2017 Hapu PTY Limited All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
