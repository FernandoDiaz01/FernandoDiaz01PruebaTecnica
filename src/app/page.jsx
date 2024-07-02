import Image from 'next/image';
import styles from './Page.module.css'
import fotoPortfolio from '../../public/FotoPortfolio.png'
import About from './about/About';


export default function Home() {
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
      <About/>

    </>

 
  );
}
