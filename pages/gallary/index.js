import styles from '../../styles/Gallary.module.css';
import Link from 'next/link';
import { motion } from "framer-motion";
import { homecontainer, homeh2, homebtn,cards, card } from "../../components/Animations";

const Gallary = () => {
    const gallaries = [
        {id:1, title:'gallary01', content:'PHOTO frame gallary'},
        {id:2, title:'gallary02', content:''},
        {id:3, title:'gallary03', content:''},
        {id:4, title:'gallary04', content:'frame sellection'},
    ]
    return ( 
        <>
        <div className={styles.gallary}>
            <div className={styles.title}>
            <motion.h1 variants={homeh2}
                initial="hidden"
                animate="show"
                exit="hide"
            >Gallary</motion.h1>
            </div><br/><br/><br/>
            {/* <h2>ALL</h2> */}
            <motion.div className={styles.card_wrapper}
                variants={cards} 
                initial="hidden"
                animate="show"
                exit="hide"
            >
            {gallaries.map((gallary, i)=>(
                <Link href={`/gallary/${gallary.id}`} key={i} >
                <motion.div className={styles.card} variants={card} >
                    <div className={styles.inner}>
                        <h3>{gallary.title}</h3><br/>
                        <h4>{gallary.content}</h4>
                    </div>
                </motion.div></Link>
            ))}
            </motion.div><br/><br/>
            {/* <h2>SPA <small>(Single Page App)</small></h2> */}
            <motion.div className={styles.card_wrapper}
                variants={cards} 
                initial="hidden"
                animate="show"
                exit="hide"
            >
                <Link href={"/gallary/spa/01"} >
                    <motion.div className={styles.card} variants={card} >
                        <div className={styles.inner}>
                            <h3>SPA01</h3><br/>
                            <h4>Timeline Animation <br/><b>GSAP</b></h4>
                        </div>
                    </motion.div> 
                </Link>
                <Link href={"/gallary/spa/02"} >
                    <motion.div className={styles.card} variants={card} >
                        <div className={styles.inner}>
                        <h3>SPA02</h3><br/>
                        <h4>scroll Animation</h4>
                        <b>Framer Motion</b>
                        </div>
                    </motion.div> 
                </Link>
                <Link href={"/gallary/spa/03"} >
                    <motion.div className={styles.card} variants={card} >
                        <div className={styles.inner}>
                            <h3>SPA03</h3>
                            <h4> scroll Animation using </h4>
                            <b>Intersection Observer <small>(with Library)</small></b>
                            <p></p>
                        </div>
                    </motion.div> 
                </Link>
                <Link href={"/gallary/spa/04"} >
                    <motion.div className={styles.card} variants={card} >
                        <div className={styles.inner}>
                            <h3>SPA04</h3>
                            <h4>Infinite Scrolling using </h4>
                            <b>Intersection Observer<br/> <small>(no Library)</small></b>
                            <p></p>
                        </div>
                    </motion.div> 
                </Link>
                <Link href={"/gallary/spa/05"} >
                    <motion.div className={styles.card} variants={card} >
                        <div className={styles.inner}>
                            <h3>SPA05</h3>
                            <h4>Parallax Effect <br/>using <b>GSAP ScrollTrigger</b></h4>
                            <p></p>
                        </div>
                    </motion.div> 
                </Link>
            </motion.div>
            
        </div>
        
        </>
    );
}

export default Gallary;