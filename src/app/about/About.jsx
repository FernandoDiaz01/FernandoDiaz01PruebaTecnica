import Image from 'next/image'
import styles from './about.module.css'
import imgAbout from './imgAbout/imgAboutMe.png'
export default function About() {
  return (
    <div className={styles.mainContainerAbout}>
      <div className={styles.containerTitleAbout}>
       
        <Image src={imgAbout} alt='fondoAbout' width={300} height={300}/>
      </div>
      <div className={styles.descriptionAbout}>
      <p className={styles.textAbout}>
                Estoy enfocado en el desarrollo front-end
                utilizando React y estoy abierto
                a aprender otras herramientas.
                Además, estoy estudiando el desarrollo back-end
                para convertirme en un desarrollador full stack.
                Inicialmente, comencé mis estudios
                en Psicología durante dos años,
                pero mi interés por la programación
                me llevó a dedicarme exclusivamente a ello.
                Aprendí programación viendo videos en YouTube
                y utilizando otras plataformas, lo que me permitió
                adquirir conocimientos suficientes
                para crear una base de datos,
                conectarla con el backend
                y realizar solicitudes desde el front-end.
                Mi objetivo es profundizar en el desarrollo back-end
                para comprender mejor el manejo de datos
                y los conceptos subyacentes.
            </p>

      </div>

    </div>
  )
}
