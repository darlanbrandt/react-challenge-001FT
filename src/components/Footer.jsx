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
        <a href="#">
          Or browse local nanny-shares
        </a>
        <section className={css.footerInfo}>
          <div className={css.logo}>
            <img src={hapuLogo} alt="Hapu logo" />
          </div>
          <div className={css.links}>
            <a href="#">Share Your Nanny</a>
            <a href="#">Our Story</a>
            <a href="#">Blog</a>
            <a href="#">Terms & Privacy</a>
          </div>
          <div className={css.social}>
            <a href="http://www.facebook.com">
              <img src={facebookLogo} alt="" />
            </a>
            <a href="http://www.twitter.com">
              <img src={twitterLogo} alt="" />
            </a>
            <a href="http://www.instagram.com">
              <img src={instagramLogo} alt="" />
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
