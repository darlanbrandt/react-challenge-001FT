import React from 'react';
import css from 'components/styles/Loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={css.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
