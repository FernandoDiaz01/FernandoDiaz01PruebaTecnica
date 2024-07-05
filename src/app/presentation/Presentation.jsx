"use client";
import Image from 'next/image';
import styles from './presentation.module.css';
import fotoPortfolio from './imgPresentation/FotoPortfolio.png';
import { motion } from 'framer-motion';

export default function Presentation() {
  return (
    <>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1, color: "#fff" }}
        transition={{ duration: 1 }}>

        <div className={styles.mainContainer}>
          <div className={styles.imgContainer}>
            <Image className={styles.imgPresentation} src={fotoPortfolio} alt='Foto de perfil' />
          </div>
        
          <div className={styles.presentation}>
            <motion.div>
              <h1 className={styles.titlePresentation} data-text="Fernando Diaz">
                Fernando Diaz
              </h1>
            </motion.div>
            <h3 className={styles.subtitlePresentation} data-text="Desarrollador FrontEnd">
              Desarrollador FrontEnd
            </h3>
          </div>
        </div>
        
        <div className={styles.arrowContainer}>
          <div className={styles.arrow}></div>
        </div>
      </motion.div>
    </>
  );
}
