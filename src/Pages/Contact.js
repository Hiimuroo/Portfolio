import React from 'react';
import ContactForm from '../components/Contactform';
import '../assets/style/Contact.css'

const Contact = () => {
  return (
    <div className="Contact sections">
      <h2>Contactez-moi</h2>
      <hr />
      <ContactForm />
    </div>
  );
};

export default Contact;