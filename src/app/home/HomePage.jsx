import Image from 'next/image';
import styles from './home.module.css'
import fotoPortfolio from './imgHome/FotoPortfolio.png'



export default function HomePage() {
  return (
    <>
    <div className={styles.mainContainer}>
    <div className={styles.imgContainer}>
       <Image className={styles.imgPresentation} src={fotoPortfolio} alt='Foto de perfil' />
      </div>
    
   
      <div className={styles.presentation}>

          <h1 className={styles.titlePresentation} data-text="Fernando Diaz">
            Fernando Diaz
          </h1>
       
        <h3 className={styles.subtitlePresentation} data-text="Desarrollador FrontEnd">
         Desarrollador FrontEnd
        </h3>
      </div>
      
      </div>
    

    </>

 
  );
}
