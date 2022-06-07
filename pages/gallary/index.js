import styles from '../../styles/Gallary.module.css';
import Link from 'next/link';

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
                <h1>Gallary</h1>  
            </div><br/>
            {/* <h2>ALL</h2> */}
            <div className={styles.card_wrapper}>
            {gallaries.map((gallary, i)=>(
                <Link href={`/gallary/${gallary.id}`} key={i} >
                <div className={styles.card} >
                    <div className={styles.inner}>
                        <h3>{gallary.title}</h3><br/>
                        <h4>{gallary.content}</h4>
                    </div>
                </div></Link>
            ))}
            </div><br/><br/>
            {/* <h2>SPA <small>(Single Page App)</small></h2> */}
            <div className={styles.card_wrapper}>
                <Link href={"/gallary/spa/01"} >
                    <div className={styles.card} >
                        <div className={styles.inner}>
                            <h3>SPA01</h3><br/>
                            <h4>Timeline Animation <br/><b>GSAP</b></h4>
                        </div>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/02"} >
                    <div className={styles.card} >
                        <div className={styles.inner}>
                        <h3>SPA02</h3><br/>
                        <h4>scroll Animation</h4>
                        <b>Framer Motion</b>
                        </div>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/03"} >
                    <div className={styles.card} >
                        <div className={styles.inner}>
                            <h3>SPA03</h3>
                            <h4> scroll Animation using </h4>
                            <b>Intersection Observer <small>(with Library)</small></b>
                            <p></p>
                        </div>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/04"} >
                    <div className={styles.card} >
                        <div className={styles.inner}>
                            <h3>SPA04</h3>
                            <h4>Infinite Scrolling using </h4>
                            <b>Intersection Observer<br/> <small>(no Library)</small></b>
                            <p></p>
                        </div>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/05"} >
                    <div className={styles.card} >
                        <div className={styles.inner}>
                            <h3>SPA05</h3>
                            <h4>Parallax Effect <br/>using <b>GSAP ScrollTrigger</b></h4>
                            <p></p>
                        </div>
                    </div> 
                </Link>
            </div>
            
        </div>
        
        </>
    );
}

export default Gallary;