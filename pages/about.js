import styles from '../styles/About.module.css'
import AboutCard from '../components/AboutCard';


const About = () => {
  return ( 
    <div className={styles.about}>
      <AboutCard />
    </div>
  );
}

export default About;