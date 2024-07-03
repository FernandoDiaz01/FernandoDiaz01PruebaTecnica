"use client"; // This is a client component 👈🏽
import styles from "./contact.module.css";

export const Contact = () => {

  const validateForm = () => {
    const newErrors = {};
    const formElements = form.current.elements;

    if (!formElements.user_name.value.trim()) {
      newErrors.user_name = 'El nombre es requerido';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formElements.user_email.value.trim())) {
      newErrors.user_email = 'El correo electrónico es requerido';
    }

    if (!formElements.message.value.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  }


  return (
    <div className={styles.mainContainerForm}>
      <div id="contact" className={styles.contactTitleContainer}>
        <div className={styles.contactTitle}>Contacto</div>
      </div>
      <form>
        <div className={styles.containerContact}>
          <label className={styles.labelForm}>Nombre:</label>
          <input className={styles.inputForm} type="text" id="name" name="user_name" required />
          {/* {errors.user_name && <div className={styles.errorForm}></div>} */}

          <label className={styles.labelForm}>Email:</label>
          <input className={styles.inputForm} type="text" id="email" name="user_email" required />
        {/*   {errors.user_email && <div className={styles.errorForm}></div>} */}

          <label className={styles.labelForm}>Mensaje:</label>
          <textarea className={styles.textareaForm} name="message" id="msg"></textarea>
          {/* {errors.message && <div className={styles.errorForm}></div>} */}
        </div>
        <div className={styles.btnContactContainer}>
          <input className={styles.inputForm}
            type="submit"
            value={ 'El mensaje se envio correctamente' }
          />
        </div>
      </form>
    </div>
  );
};