
/* import styles from './Page.module.css'; */
import HomePage from './home/HomePage';
import About from './about/About';
import Interests from './interestList/Interests';
import { Contact } from './contact/contact';
import Header from './header/Header';


export default function Home() {
  return (
    <>
    <Header/>
   <HomePage />
   <About />
   <Interests />
   <Contact/>
    </>

 
  );
}
