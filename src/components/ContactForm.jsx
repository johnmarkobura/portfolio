import { useState } from 'react'
import styles from '../styles/App.module.css'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]:
        event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio message from ${
        form.name || 'a visitor'
      }`,
    )

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

${form.message}`,
    )

    window.location.href =
      `mailto:oburajohnmark7@gmail.com` +
      `?subject=${subject}` +
      `&body=${body}`
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <div className={styles.formRow}>
        <label>
          Name

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        Message

        <textarea
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <button
        className={styles.primaryButton}
        type="submit"
      >
        Open email draft
      </button>

      <p className={styles.formNote}>
        This static site does not
        store form submissions.
        Submitting opens your
        default email client with
        the message prefilled.
      </p>
    </form>
  )
}
