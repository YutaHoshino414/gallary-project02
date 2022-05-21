import styles from '../../styles/Gallary.module.css';
import Link from 'next/link';

const Gallary = () => {
    const gallaries = [
        {id:1, title:'gallary01', content:'PHOTO frame gallary'},
        {id:2, title:'gallary02', content:'parallax'},
        {id:3, title:'gallary03', content:'parallax'},
        {id:4, title:'gallary04', content:'parallax'},
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
                    <h3>{gallary.title}</h3><hr/><br/>
                    <h4>{gallary.content}</h4>
                </div></Link>
            ))}
                
        </div>
        </div>
        
        </>
    );
}
 
export default Gallary;