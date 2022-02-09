const ContactForm = () => {
  return (
    <section className='contact'>
      <h1>How can I help you?</h1>
      <form className='form'>
        <div className='form__controls'>
          <div className='form__control'>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required />
          </div>
          <div className='form__control'>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required />
          </div>
        </div>
        <div className='form__control'>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows={5} required />
        </div>

        <div className='contact__actions'>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
