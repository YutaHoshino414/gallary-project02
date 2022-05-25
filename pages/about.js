import styles from '../styles/About.module.css'
import AboutCard from '../components/AboutCard';
import GithubCorner from '../components/GithubCorner';


const About = () => {
  return ( 
    <div className={styles.about}>
      <AboutCard />
      <GithubCorner />
    </div>
  );
}

export default About;