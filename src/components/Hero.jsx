import React from 'react';
import playButton from 'assets/play-button.svg';
import heroImg from 'assets/Hero/hero-image.png';
import css from 'components/styles/Hero.module.css';

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
              <a href="#">
                <img src={playButton} alt="Play button" />
                <span>See hapu in action (27 seconds)</span>
              </a>
            </div>
          </div>
        </div>
        <div className={css.image}>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
}
