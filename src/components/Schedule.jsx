import React from 'react';
import css from 'components/styles/Schedule.module.css';
import profileImage from 'assets/Schedule/profile-image.png';

export default function Schedule() {
  return (
    <>
      <div className={css.schedule}>
        <img src={profileImage} alt="Profile image" />
        <a href="" class="link">
          Sarah’s day care available now in North Sydney
        </a>
        <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
      </div>
    </>
  );
}
