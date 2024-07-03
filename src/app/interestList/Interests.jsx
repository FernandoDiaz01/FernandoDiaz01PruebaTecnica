
import styles from './interests.module.css';

const Interests = () => {
  const interests = [
    'Lectura',
    'Fútbol',
    'Viajar',
    'Videojuegos',
    'Programación',
    'Música',
    'Cine',
    'Cocina',
    'Deportes',

  ];

  return (
    <div className={styles.mainContainerInterest}>
      <h2 className={styles.titleInterest}>Intereses Personales</h2>
      <ul className={styles.listInterest}>
        {interests.map((interest) => (
          <li key={interest} className={styles.itemInterest}>
            <div className={styles.contentInterest}>

            {interest}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;


