import React from 'react';
import css from 'components/styles/Hero.module.css';
import heroImg from 'assets/Hero/hero-image.png';
import playButton from 'assets/Hero/play-button.svg';

export default function Hero() {
  return (
    <>
      <div className={css.hero}>
        <div className={css.text}>
          <div className={css.title}>
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>
            <div className={css.play}>
              <a href="#1">
                <img src={playButton} alt="Play button" />
                <span>See hapu in action (27 seconds)</span>
              </a>
            </div>
          </div>
        </div>
        <div className={css.image}>
          <img src={heroImg} alt="Hapu nanny share" />
        </div>
      </div>
    </>
  );
}
