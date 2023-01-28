import classes from './Contact.module.css';
import { useState, useEffect } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (email.includes('@') && message.length >= 4 && name) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [email, message, name]);

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Form send !');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className={classes.contact}>
      <div className={classes.contactTexts}>
        <h3 className={classes.titleText}>Contact us!</h3>
        <p className={classes.contactText1}>
          The support staff and customer service are available to help you with
          any questions or needs you might have. Just drop us a line.
        </p>
        <p className={classes.contactText2}>
          This site is owned and operated by Kode Tech Solutions LTD
        </p>
        <p className={classes.contactKey}>Phone:</p>
        <p className={classes.contactValue}>442038857261</p>
        <p className={classes.contactKey}>Email:</p>
        <p className={classes.contactValue}>help@google.com</p>
        <p className={classes.contactKey}>Address:</p>
        <p className={classes.contactValue}>
          Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro,
          Republic of the Marshall Islands, MH 96960
        </p>
      </div>

      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <input
          className={classes.inputField}
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          className={`${classes.inputField} ${
            !email.includes('@gmail.com') ? classes.red : classes.green
          }`}
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <input
          className={classes.inputFieldMsg}
          placeholder="Message"
          type="text"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button className={classes.formBtn} disabled={!isButtonEnabled}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default Contact;
