/* import styles from './interest.module.css'

export default function Interest() {
  return (
    <div className={styles.mainContainerInterest} >
        <div className={styles.containerTitleInterest}>
      <h1 className={styles.titleInterest}>Intereses Personales</h1>
        </div>
    
    </div>
  )
} */

  // components/InterestsList/InterestsList.js
// components/InterestsList/InterestsList.js
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
      <h2 className={styles.titleInterest}>Personal Interests</h2>
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


