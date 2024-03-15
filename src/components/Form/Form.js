import React, { useState } from 'react';
import style from './Form.module.css';
import { nunito_sans } from '@/fonts/fonts';
import Image from 'next/image';
import contactImg from '/public/unseen-studio-s9CC2SKySJM-unsplash.jpg';

export function ContactForm() {
    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here, such as sending the data to a server
        console.log("Form submitted with data:", { name, email, phone, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div className={`${style.formContainer} ${nunito_sans.className}`}>
            <div className={style.headerContentWrapper}>
                <Image className={style.contactImg} alt='' src={contactImg} width={200} height={200} />
                <div className={style.formHeader}>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className={style.contactContentWrapper}>
                <div>
                    <h2>Location</h2>
                    <p>9131 Keele Street, Suite A4,<br /> Vaughan, Ontario L4K 0G7</p>
                    <h2>Hours</h2>
                    <p>Mon - Sat 8.00 - 18.00</p>
                </div>
                <form className={style.formWrapper} onSubmit={handleSubmit}>
                    {/* Name input field */}
                    <div className={style.formInputWrapper}>
                        <label className={style.formLabel}>Name</label>
                        <input
                            placeholder='First and Last Name'
                            className={style.formInput}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Email input field */}
                    <div className={style.formInputWrapper}>
                        <label className={style.formLabel}>Email</label>
                        <input
                            placeholder='abc@mail.com'
                            className={style.formInput}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {/* Phone number input field */}
                    <div className={style.formInputWrapper}>
                        <label className={style.formLabel}>Phone</label>
                        <input
                            placeholder='(123) 456-7890'
                            className={style.formInput}
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    {/* Message textarea field */}
                    <div className={style.formInputWrapper}>
                        <label className={style.formLabel}>Message</label>
                        <textarea
                            placeholder='Your message...'
                            className={style.formTextarea}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    {/* Submit button */}
                    <div className={style.formInputWrapper}><button className={style.formButton} type="submit">Submit</button></div>

                </form>
            </div>

        </div>
    );
};
