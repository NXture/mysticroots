import * as React from "react"
import {
  buttonWrapper,
  contactFormWrapper,
  inputWrapper,
  wrapper,
} from "./contact.css"

export default function ContactForm() {
  return (
    <div className={wrapper}>
      <form
        method="post"
        action="https://getform.io/f/a974b7c6-67b0-4a9b-a054-62c1aad35aa9"
      >
        <div className={contactFormWrapper}>
          <p>
            <label>
              <input
                className={inputWrapper}
                size={30}
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <input
                className={inputWrapper}
                size={30}
                placeholder="Your Email"
                type="email"
                name="email"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                className={inputWrapper}
                placeholder="How can we help?"
                name="message"
                rows={8}
                cols={35}
                required
              ></textarea>
            </label>
          </p>
          <button type="submit" className={buttonWrapper}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
