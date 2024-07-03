"use client"; // This is a client component 👈🏽
import { useState } from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message }); // simulacion del envio
    setEmailSent("Mensaje Enviado!");
    //Limpiar los campos despues de 3 seg.
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className={styles.mainContainerForm}>
      <div id="contact" className={styles.contactTitleContainer}>
        <div className={styles.contactTitle}>Contacto</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerContact}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            className={styles.textareaForm}
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.btnFormContainer}>
         <button className={styles.btnForm} type="submit">
            Enviar
          </button>
        </div>
      </form>
      {
            emailSent && (
              <div className="successMessage">
                <p>{emailSent} </p>
              </div>
            )
          }
    </div>
  );
};
