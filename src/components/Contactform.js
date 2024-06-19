//contact.js
import React, { useState } from 'react';
import '../assets/style/Contact.css';

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
    <div className="Contact" role='main'>
      <h1>Contactez-moi</h1>
      <div className="separator"></div>
      <p>
        En tant qu'intégrateur/développeur web passionné et expérimenté, je suis prêt à relever de nouveaux défis et à mettre mes compétences à votre service pour la conception ou la refonte de votre site web.
      </p>
      <p>Horaire de contact tous les jours entre 8h30 - 17h30</p>
      <form onSubmit={handleSubmit}>
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
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
