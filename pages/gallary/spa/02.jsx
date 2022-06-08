import CardList from '../../../components/gallary/CardList';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import { motion, Variants } from "framer-motion";
import StaggerAnime01 from '../../../components/StaggerAnime01';

const card_wrapper = css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #6bc4cd;
    color: white;
`

const Spa02 = () => {
    return ( 
        <>
        <div css={card_wrapper}>
            <h1>Scroll Down</h1>
        </div>
        {CardList.map((item, index)=>(
            <div css={card_wrapper} key={index}>
                <Card image={item.image} h2={item.h2} p={item.p} />
            </div>
        ))}
        <StaggerAnime01/>
        </>
    );
}

export default Spa02;

const card = css`
    height: 50vh;
    width: 35vh;
    border-radius: 13px;
    box-shadow: 20px 40px 33px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    background-color: #75b2c5;
    h2 {
    font-size: 4vh;
    margin-top: 20px;
    }
    p {
    font-size: 2vh;
    margin-top: 20px;
    }
`;
const image_container = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    background-image: linear-gradient(70deg, RoyalBlue, DarkTurquoise);
    box-shadow: 10px 15px 15px 6px #3891b4;
    border-radius: 15px;
    font-size: 15vh;
`

const imageAnimate={
    /* variant name is free */
    offscreen: {x:-100, opacity: 0},
    onscreen: {x:0, opacity: 1,
        rotate:[0, 90, -90, 90, 0], 
        transition:{type:"spring", bounce:0.4, duration: 3}
    }
}
const titleAnimate={
    /* variant name is free */
    offscreen: {x: 100, opacity: 0},
    onscreen: {x: 0, opacity: 1,
        transition:{type:"spring", bounce:0.6, duration: 3}
    }
}
const textAnimate={
    /* variant name is free */
    offscreen: {y: 100, opacity: 0},
    onscreen: {y: 0, opacity: 1,
        transition:{type:"spring", bounce:0.6, duration: 3}
    }
}


const Card = ({image, h2, p, })=>{
    return (
        <motion.div css={card}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount: 0.5}}
            transition={{staggerChildren: 0.5}}   /* staggered animation: visual changes happen as a series of operations, rather than all at once. */
        >
            <motion.div css={image_container}
                variants={imageAnimate}
            >{image} 
            </motion.div>
                <motion.h2 variants={titleAnimate}
                >{h2}</motion.h2>
                <motion.p variants={textAnimate}
                >{p}</motion.p>
        </motion.div>
    )
}
