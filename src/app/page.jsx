
/* import styles from './Page.module.css'; */
import HomePage from './home/HomePage';
import About from './about/About';
import Interests from './interestList/Interests';
import { Contact } from './contact/Contact';


export default function Home() {
  return (
    <>
   <HomePage />
   <About />
   <Interests />
   <Contact/>
    </>

 
  );
}
