import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30mpf8f",
        "template_2zr0y87",
        form.current,
        "BkesBwrsnexmxROJW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 aria-level="1">Get In Touch</h5>
      <h2 aria-level="2">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options" role="navigation">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shobanafedev@gmail.com</h5>
            <a
              href="mailto:shobanafedev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a
              href="https://m.me/shobivijay90"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+15108095194</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+15108095194"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} aria-label="contact form">
          <label for="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
