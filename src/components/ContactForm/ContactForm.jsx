import { useState } from 'react';
import useInView from '../../hooks/useInView';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [ref, isInView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // ── Swap this for your preferred service (Formspree, EmailJS, etc.) ──
    try {
      // Example: Formspree endpoint — replace YOUR_FORM_ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ''}`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind? Fill out the form and I'll be in touch as
            soon as possible.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="cf-name" className={styles.label}>
                Full Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="cf-email" className={styles.label}>
                Email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="cf-message" className={styles.label}>
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell me about your project, needs, and timeline."
              required
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Sent ✓'
              : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className={styles.error}>
              Something went wrong — please try again or email directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
