import React, { useState } from "react";
import style from "./Form.module.css";
import { nunito_sans } from "@/fonts/fonts";
import Image from "next/image";
import contactImg from "/public/unseen-studio-s9CC2SKySJM-unsplash.jpg";
import Link from "next/link";

export function ContactForm() {
  // State variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending the data to a server
    console.log("Form submitted with data:", { name, email, phone, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className={`${style.formContainer} ${nunito_sans.className}`}>
      <div className={style.headerContentWrapper}>
        <Image
          className={style.contactImg}
          alt=""
          src={contactImg}
          width={200}
          height={200}
        />
        <div className={style.formHeader}>
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className={style.contactContentWrapper}>
        <div>
          <h2>Location</h2>
          <strong>Maple Community Centre</strong>
          <p>
            10190 Keele St,
            <br /> Maple, Ontario, L6A 1R7
          </p>
          <strong>Civic Centre Resource Library</strong>
          <p>
            2191 Major Mackenzie Dr W, <br />
            Vaughan, Ontario, L6A 4W2
          </p>
          <h2>Hours</h2>
          <p>
            Mon - Sat <br />
            8:00am - 6:00pm
          </p>
          <h2>Contact</h2>
          <Link className={style.teleLink} href="tel:+16475185492">
            tel: 647.518.5492
          </Link>
          <br />
          <Link className={style.teleLink} href="tel:+12898597676">
            bus: 289.859.7676
          </Link>
        </div>

        <form className={style.formWrapper} onSubmit={handleSubmit}>
          <h2>Contact us via email or give us a call!</h2>
          <Link className={style.teleLink} href="tel:+16475185492">
            tel: 647.518.5492
          </Link>
          <br />
          <Link className={style.teleLink} href="tel:+12898597676">
            bus: 289.859.7676
          </Link>
          <br />
          <Link className={style.teleLink} href="mailto:vaughancentreforautism@gmail.com">
            email: vaughancentreforautism@gmail.com
          </Link>

          {/* Name input field */}
          {/* <div className={style.formInputWrapper}>
            <label className={style.formLabel}>Name</label>
            <input
              placeholder="First and Last Name"
              className={style.formInput}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div> */}
          {/* Email input field */}
          {/* <div className={style.formInputWrapper}>
            <label className={style.formLabel}>Email</label>
            <input
              placeholder="abc@mail.com"
              className={style.formInput}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div> */}
          {/* Phone number input field */}
          {/* <div className={style.formInputWrapper}>
            <label className={style.formLabel}>Phone</label>
            <input
              placeholder="(123) 456-7890"
              className={style.formInput}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div> */}
          {/* Message textarea field */}
          {/* <div className={style.formInputWrapper}>
            <label className={style.formLabel}>Message</label>
            <textarea
              placeholder="Your message..."
              className={style.formTextarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div> */}
          {/* Submit button */}
          {/* <div className={style.formInputWrapper}>
            <button className={style.formButton} type="submit">
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
