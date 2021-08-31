import React from 'react';
import css from 'components/styles/Form.module.css';

export default function Form() {
  return (
    <div className={css.form}>
      <form action>
        <div className={css.inputFields}>
          <input type="text" name="" id="" placeholder="Your name" />
          <input type="text" name="" id="" placeholder="Your email" />
        </div>
        <button type="button" class="button">
          Send
        </button>
      </form>
    </div>
  );
}
