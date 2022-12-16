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
        action="https://getform.io/f/4501a883-2363-4ba9-8077-3e42ba6288f7"
      >
        <div className={contactFormWrapper}>
          <p>
            <label>
              <input
                className={inputWrapper}
                size={33}
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
                size={33}
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
