import { useState } from 'react';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendContactHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // optional: add client-side validation

    const enteredContact = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredContact),
    });
  };

  return (
    <section className='contact'>
      <h1>How can I help you?</h1>
      <form className='form' onSubmit={sendContactHandler}>
        <div className='form__controls'>
          <div className='form__control'>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className='form__control'>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className='form__control'>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            rows={5}
            required
          />
        </div>

        <div className='contact__actions'>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
