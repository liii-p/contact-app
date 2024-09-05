"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ContactCard from "../Components/ContactCard/ContactCard";

function ContactsList() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:2017/contacts")
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        return data;
      })
      .then(async (data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h2>Contacts</h2>
      <div className={styles.main__header}>
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Note</p>
      </div>
      <div className={styles.contactsList}>
        {typeof backendData.contactsList === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.contactsList.map((contact, i) => {
            return (
              <ContactCard
                className={styles.contactsList__desc}
                props={contact}
                key={i}
              />
            );
          })
        )}
      </div>
    </main>
  );
}

export default ContactsList;
