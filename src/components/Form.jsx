import React, { useState } from 'react';
import api from 'services/api';
import css from 'components/styles/Form.module.css';
import Loading from './Loading';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState('');
  let formMessage = '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setIsError(false);
    const formData = {
      name: name,
      email: email,
    };
    await api
      .post('challenge-newsletter/', formData)
      .then((res) => {
        setData(res.data);
        setName('');
        setEmail('');
        setLoading(false);
        formMessage = 'You successfully subscribed to our newsletter';
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        formMessage = 'There was an error. Please try again';
      });
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
        <button type="submit" className={css.button} disabled={loading}>
          {loading ? <Loading /> : 'Send'}
        </button>
      </form>
    </div>
  );
}
