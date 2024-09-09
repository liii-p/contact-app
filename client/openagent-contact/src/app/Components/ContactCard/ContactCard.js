import React, { useState } from "react";
import Image from "next/image";
import profile from "../../img/default-profile-pic.jpg";
import styles from "./ContactCard.module.scss";
import { FaTrashCan } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import { port } from "@/app/config";

function ContactCard({ props }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleDelete = () => {
    try {
      const data = fetch(`http://localhost:2017/contact/${props.id}`, {
        method: "DELETE",
      });
      console.log("Data successfully deleted: ", data.body);
      window.location.reload();
    } catch (err) {
      window.alert(
        "Error: " + err + " Could not delete the contact. Please try again."
      );
    }
  };

  const handleVerified = async () => {
    try {
      const data = await fetch(`http://${port}/contact/${props.id}`, {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify({
          verified: "true",
        }),
      });
    } catch (err) {
      window.alert("Error: " + err);
    }
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactCard__desc}>
        <Image
          src={profile}
          height={100}
          width={100}
          alt="default profile image"
          id={styles.profile}
        />

        <h4>
          {props.firstName} {props.lastName}
        </h4>
        <div className={styles.details}>
          <div>
            <p>{props.email}</p>
          </div>
          <div>
            <p>{props.phone}</p>
          </div>
          <div>
            <Modal props={props.note} />
          </div>
        </div>
        <div className={styles.options}>
          <div>
            <label htmlFor="verified">Mark as verified</label>
            <input
              type="checkbox"
              name="verified"
              id={styles.checkbox}
              onClick={handleVerified}
              disabled={props.verified}
            />
          </div>
          <div id={styles.delete}>
            <FaTrashCan onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
