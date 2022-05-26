import {motion} from 'framer-motion';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";


const example01 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const card = css`
    background-color: #fff;
    padding: 2rem 4rem;
    cursor: pointer;
    p {
        padding-top: 0.5rem;
        line-height: 150%;
    }
    margin-top: 20px;
    min-width: 210px;
`
const expand = css`
    width: 500px;
    height: 150px;
` 

const Example01 = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <>
        <div css={example01} >
            <motion.div css={card}
                transition={{layout: {duration: 1.0, type: "spring"}}} 
                layout 
                onClick={ ()=> setIsOpen(!isOpen)} 
                style={{
                    borderRadius: "1rem", boxShadow:"0px 20px 40px rgba(0,0,0, 0.5)"
                }}
            >
            <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
            {isOpen && (
                <motion.div css={expand}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Maxime, qui! Et modi eius numquam ab atque ea, dolorem amet aut.
                </p>
                <button>Read More</button>
                </motion.div>
            )}
            </motion.div>
        </div>
        </>
    );
}

export default Example01;
