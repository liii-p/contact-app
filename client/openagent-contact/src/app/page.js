"use client";
import styles from "./page.module.scss";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GiTalk, GiPostOffice } from "react-icons/gi";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.info}>
        <h1>Welcome to OpenAgent.</h1>
        <h2>
          We've been around since 2013, and our vision is to make it easy for
          people to buy, sell and own property.
        </h2>
        <p>Here are the different ways you can contact us:</p>
        <div className={styles.details}>
          <h3>Contact Us Details</h3>
          <div>
            <FaPhoneAlt id="phone" size={25} />
            <p>Phone: 13 24 34</p>
          </div>
          <div>
            <MdOutlineEmail size={35} />
            <p>Email: support@openagent.com.au</p>
          </div>
          <h3>Postal Address</h3>
          <div>
            <GiPostOffice size={35} />
            <p>PO Box 419, Alexandria NSW 1435</p>
          </div>
          <h3>Contact centre hours of operation</h3>
          <div>
            <GiTalk size={35} />
            <p>Monday - Friday 8:30 - 5:00</p>
          </div>
        </div>
      </section>
      <section className={styles.form__container}>
        <h2>Contact Us</h2>
        <form action="#" method="POST" className={styles.form}>
          <div className={styles.firstLast}>
            <div id={styles.first}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className={styles.input}
                name="firstName"
                placeholder="Your name..."
                required
              />
            </div>
            <div id={styles.last}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id={styles.lastName}
                className={styles.input}
                name="lastName"
                placeholder="Your last name..."
                required
              />
            </div>
          </div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id={styles.email}
            className={styles.input}
            name="email"
            required
            placeholder="email@example.com"
          />

          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            id={styles.number}
            className={styles.input}
            name="phoneNum"
            placeholder="0412345678"
            required
          />

          <label htmlFor="note">Note</label>
          <textarea
            id={styles.note}
            name="note"
            className={styles.textarea}
            placeholder="Add a note here..."
            style={{ height: "200px" }}
          />
          <input type="submit" id={styles.submit} />
        </form>
      </section>
    </div>
  );
}
