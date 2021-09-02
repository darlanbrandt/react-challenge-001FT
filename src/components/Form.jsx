import React, { useState } from 'react';
import ResultModal from 'components/ResultModal';
import api from 'services/api';
import css from 'components/styles/Form.module.css';
import Loading from './Loading';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  let errorMessage =
    'There was an error while submitting the form. Please, try again.';
  let error = false;

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() && !email.trim()) {
      errorMessage = 'Please fill all the fields.';
      error = true;
    } else if (!name.trim()) {
      errorMessage = 'Please enter a valid name.';
      error = true;
    } else if (!email.trim()) {
      errorMessage = 'Please enter a valid e-mail';
      error = true;
    } else if (email.trim()) {
      if (!validateEmail(email)) {
        errorMessage = 'Please enter a valid e-mail.';
        error = true;
      }
    }

    setLoading(true);
    setIsError(false);
    const formData = {
      name: name,
      email: email,
    };
    if (!error) {
      await api
        .post('challenge-newsletter/', formData)
        .then((res) => {
          setName('');
          setEmail('');
          setLoading(false);
          setIsModalOpen(true);
          setResultMessage('You successfully subscribed to our newsletter.');
        })
        .catch((err) => {
          setLoading(false);
          setIsError(true);
          setIsModalOpen(true);
          setResultMessage(errorMessage);
        });
    } else {
      setIsError(true);
      setLoading(false);
      setIsModalOpen(true);
      setResultMessage(errorMessage);
    }
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
      <ResultModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        isError={isError}
        resultMessage={resultMessage}
      />
    </div>
  );
}
