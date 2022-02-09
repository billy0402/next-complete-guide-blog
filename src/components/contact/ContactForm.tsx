import { useEffect, useState } from 'react';

import Notification, { NotificationProps } from '@components/ui/Notification';
import { ContactCreate } from '@models/contact';

const createContact = async (contact: ContactCreate) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] =
    useState<NotificationProps['status']>();
  const [requestError, setRequestError] = useState<string>('');

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
        setRequestError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendContactHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    // optional: add client-side validation

    const enteredContact = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    setRequestStatus('pending');
    try {
      await createContact(enteredContact);
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError((error as Error).message);
      setRequestStatus('error');
    }
  };

  let notification: NotificationProps | undefined;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

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
      {notification && <Notification {...notification} />}
    </section>
  );
};

export default ContactForm;
