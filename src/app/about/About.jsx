import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.mainContainerAbout}>
      <div className={styles.titleAbout}>
        About me
      </div>
      <div className={styles.descriptionAbout}>
      <p className={styles.textAbout}>
                Estoy enfocado en el desarrollo front-end<br/>
                utilizando React y estoy abierto<br/>
                a aprender otras herramientas.<br/>
                Además, estoy estudiando el desarrollo back-end
                para convertirme en un desarrollador full stack.
                Inicialmente, comencé mis estudios<br/>
                en Psicología durante dos años,<br/>
                pero mi interés por la programación<br/>
                me llevó a dedicarme exclusivamente a ello.
                Aprendí programación viendo videos en YouTube<br/>
                y utilizando otras plataformas, lo que me permitió<br/>
                adquirir conocimientos suficientes<br/>
                para crear una base de datos,<br/>
                conectarla con el backend<br/>
                y realizar solicitudes desde el front-end.
                Mi objetivo es profundizar en el desarrollo back-end<br/>
                para comprender mejor el manejo de datos<br/>
                y los conceptos subyacentes.
            </p>

      </div>

    </div>
  )
}
