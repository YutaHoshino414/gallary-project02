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
            </div>
            <h2>ALL</h2>
            <div className={styles.card_wrapper}>
            {gallaries.map((gallary, i)=>(
                <Link href={`/gallary/${gallary.id}`} key={i} >
                <div className={styles.card} >
                    <h3>{gallary.title}</h3><br/>
                    <h4>{gallary.content}</h4>
                </div></Link>
            ))}
            </div><hr/><br/>
            <h2>SPA <small>(Single Page Application)</small></h2>
            <div className={styles.card_wrapper}>
                <Link href={"/gallary/spa/01"} >
                    <div className={styles.card} >
                        SPA01
                        <p>Timeline Animation with <b>GSAP</b></p>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/02"} >
                    <div className={styles.card} >
                        SPA02
                        <p>scroll Animation with <b>Framer Motion</b></p>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/03"} >
                    <div className={styles.card} >
                        SPA03
                        <p>scroll Animation with <b>Intersection Observer</b></p>
                    </div> 
                </Link>
                <Link href={"/gallary/spa/04"} >
                    <div className={styles.card} >
                        SPA04
                        <p>Infinite Scrolling using<b> Intersection Observer</b></p>
                    </div> 
                </Link>
            </div>
            
        </div>
        
        </>
    );
}

export default Gallary;