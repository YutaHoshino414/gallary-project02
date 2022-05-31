/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import styles from '../../../styles/Gallary.module.css';
import Image from 'next/image';
import beach from './beach.jpg'
import { useInView } from 'react-intersection-observer';


const card_wrapper = css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #6bc4cd;
    color: white;
`
const card = css`
    height: 55vh;
    width: 40vh;
    border-radius: 13px;
    box-shadow: 20px 40px 33px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    background-color: #93cbdb;
    /* background-color: #6bc4cd; */
    h2 {
    font-size: 4vh;
    margin-top: 20px;
    }
    p {
    font-size: 18px;
    margin-top: 20px;
    }
    .image {
    width: 35vh;
    height: 20vh;
    background-size: cover;
    background-position: center center;
    box-shadow:  10px 15px 5px 6px #3891b4;
    border-radius: 34% 66% 68% 32% / 41% 58% 42% 59% ;
    }
`;

const Spa03 = () => {

    /* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */
    const { ref, inView } = useInView({
        // オプション
        /* rootMargin: '-200px', */ // ref要素が現れてから50px過ぎたら
        threshold: 0.5, 
        triggerOnce: false, // 最初の一度だけ実行
    });
    /* how to multiple : https://stackoverflow.com/questions/64320816/how-to-use-multiple-useinview-hooks-in-the-same-react-component */
    const [ref2, inView2 ] = useInView({threshold: 0.5, triggerOnce: false, 
    })
    const [ref3, inView3 ] = useInView({threshold: 0.5, triggerOnce: false, 
    })
    return ( 
        <>
        <div css={card_wrapper}>
            <h1>Scroll Down</h1>
        </div>

        <div css={card_wrapper}>
            <div css={card} ref={ref}>
                <div className={`image ${inView ? styles.animateBeach: ""}`}  style={{backgroundImage: `url(${beach.src})`}}></div>
                <h2 className={ inView ? styles.animateTitle: ""} >Holiday location</h2>
                <p className={ inView ? styles.animateText: ""}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, quis!</p>
            </div>
        </div>
        <div css={card_wrapper}>
            <div css={card} ref={ref2}>
                <div className={`image ${inView2 ? styles.animateBeach: ""}`}  style={{backgroundImage: `url(${beach.src})`}}></div>
                <h2 className={ inView2 ? styles.animateTitle: ""} >Holiday location</h2>
                <p className={ inView2 ? styles.animateText: ""}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, quis!</p>
            </div>
        </div>
        <div css={card_wrapper}>
            <div css={card} ref={ref3}>
                <div className={`image ${inView3 ? styles.animateBeach: ""}`}  style={{backgroundImage: `url(${beach.src})`}}></div>
                <h2 className={ inView3 ? styles.animateTitle: ""}  >Holiday location</h2>
                <p className={ inView3 ? styles.animateText: ""}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, quis!</p>
            </div>
        </div>

        </>
     );
}
 
export default Spa03;