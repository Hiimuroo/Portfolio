import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:matthieu.labille@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="Contact" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        type="text"
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="submit-button">Envoyer</button>
    </form>
  );
};

export default ContactForm;
