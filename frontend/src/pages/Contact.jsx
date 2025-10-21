import ContactForm from '../components/ContactForm/ContactForm';
import './Contact.scss';

function Contact() {
  return (
    <section className="contact-page">
      <h2>Me contacter</h2>
      <p>
        N’hésitez pas à m’envoyer un message, je vous répondrai rapidement !
      </p>
      <ContactForm />
    </section>
  );
}

export default Contact;
