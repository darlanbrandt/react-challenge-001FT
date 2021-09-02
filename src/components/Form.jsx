import React, { useState } from 'react';
import api from 'services/api';
import css from 'components/styles/Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputFields}>
          <label htmlFor="name" className={css.scrOnly}>
            Enter your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className={css.scrOnly}>
            Enter your e-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
}
