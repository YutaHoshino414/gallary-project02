---
id: 0
title: 'example01'
excerpt: 'This is test excerpt of example01'
type: ''
---

# Code

---

```
import {motion} from 'framer-motion';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";


const Example01 = () => {

    const example01 = css`
        /* emotion style here */
    `
    const card = css`
        /* emotion style here */
    `
    const expand = css`
        /* emotion style here */
    `
    
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
        <div css={example01}>
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
                <p>Lorem ipsum dolor sit amet.</p>
                <button>Read More</button>
                </motion.div>
            )}
            </motion.div>
        </div>
        </>
     );
}
 
export default Example01;

```