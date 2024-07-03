import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.mainHeaderContainer}>
        <ul className={styles.containerHeaderList}>
            <li className={styles.headerList} >Inicio</li>
            <li className={styles.headerList}>Sobre Mi</li>
            <li className={styles.headerList}>Contacto</li>
        </ul>
    </div>
  )
}
