"use client";
import {motion, useScroll } from 'framer-motion';
import styles from './progressBar.module.css';


export default function ProgressBar() {

    const {scrollYProgress} = useScroll()

  return (
    <motion.div
     className={styles.progressBar}
    style={{scaleX: scrollYProgress}}
    ></motion.div>
  )
}
