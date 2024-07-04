
/* import styles from './Page.module.css'; */
import Presentation from './presentation/Presentation';
import About from './about/About';
import Interests from './interestList/Interests';
import { Contact } from './contact/contact';
import Header from './header/Header';


export default function Home() {
  return (
    <>
    <Header/>
   <Presentation />
   <About />
   <Interests />
   <Contact/>
    </>

 
  );
}
