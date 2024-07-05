"use client"; // This is a client component 👈🏽
import { useState } from "react";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!name) errors.name = "El nombre no puede ir vacío";
    if (!email) errors.email = "El email no puede ir vacío";
    if (!message) errors.message = "El mensaje no puede ir vacío";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log({ name, email, message }); // simulacion del envio
      setEmailSent("Mensaje Enviado!");
      // Limpiar los campos despues de 3 seg.
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(false);
      }, 3000);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className={styles.mainContainerForm}>
      <div className={styles.contactTitleContainer}>
        <div className={styles.contactTitle}>Contacto</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerContact}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors({ ...errors, name: "" });
            }}
            
          />
          {errors.name && (
            <p className={styles.error}>
              <FontAwesomeIcon icon={faExclamationTriangle} className={styles.icon} />
              {errors.name}
            </p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            
          />
          {errors.email && (
            <p className={styles.error}>
              <FontAwesomeIcon icon={faExclamationTriangle} className={styles.icon} />
              {errors.email}
            </p>
          )}

          <label htmlFor="message">Mensaje:</label>
          <textarea
            className={styles.textareaForm}
            id="message"
            rows="5"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrors({ ...errors, message: "" });
            }}
          ></textarea>
          {errors.message && (
            <p className={styles.error}>
              <FontAwesomeIcon icon={faExclamationTriangle} className={styles.icon} />
              {errors.message}
            </p>
          )}
        </div>
        <div className={styles.btnFormContainer}>
          <button
            className={styles.btnForm}
            type="submit"
            style={{ backgroundColor: emailSent ? "green" : "blue" }}
          >
            {emailSent ? "Enviado con éxito!" : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};
