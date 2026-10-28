
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your enquiries.",
    value: "brightifeanyi683@gmail.com",
    link: "mailto:brightifeanyi683@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our support team.",
    value: "+234 904 888 9338",
    link: "tel:+2349048889338",
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "We're here to help.",
    value: "Monday – Friday",
    link: null,
  },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:support@nexapay.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              CONTACT NEXAPAY
            </span>

            <h1>
              We're here to <span className="gradient-text">help you.</span>
            </h1>

            <p>
              Have a question or need assistance? Get in touch with our team.
              We're ready to help you navigate your financial journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-layout">
          <motion.div
            className="contact-information"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2>Let's start a conversation.</h2>
            <p className="contact-intro">
              Tell us how we can help. Choose a contact option or send us a
              message using the form.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.title}>
                    <div className="contact-detail-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-trust-note">
              <div className="contact-trust-icon">
                <MessageCircle size={22} />
              </div>
              <div>
                <h3>Your questions matter.</h3>
                <p>
                  Contact our team for assistance with your enquiries.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-form-heading">
              <h2>Send us a message</h2>
              <p>Fill in the details below to prepare your email.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What do you need help with?"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button className="button-primary contact-submit" type="submit">
                Prepare Email
                <Send size={18} />
              </button>

              <p className="contact-form-disclaimer">
                This form opens your email application. It does not send
                messages directly from the website.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
