---
id: 1
title: 'example02'
excerpt: 'This is test excerpt of example02'
type: 'mid'
---

```
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const data = [
    {id: 1, title:'1', body:'', tag:"nav", },
    {id: 2, title:'2', body:'', tag:"framer", },
    {id: 3, title:'3', body:'', tag:"modal", },
    {id: 4, title:'4', body:'', tag:"nav", },
    {id: 5, title:'5', body:'', tag:"modal", },
    {id: 6, title:'6', body:'', tag:"framer", },
    {id: 7, title:'1', body:'', tag:"nav", },
    {id: 8, title:'2', body:'', tag:"framer", },
    {id: 9, title:'3', body:'', tag:"modal", },
    {id:10, title:'4', body:'', tag:"nav", },
    {id:11, title:'5', body:'', tag:"nav", },
    {id:12, title:'6', body:'', tag:"framer", },
]
const example02 = css`
    /* emotion style here */
`;
const card_list = css`
    /* emotion style here */
`;
const card = css`
    /* emotion style here */
`;
const card_header = css`
    /* emotion style here */
`;

const Example02 = () => {
    const [tag, setTag] = useState('all');
    const [filtered, setFiltered] = useState([]);

    useEffect(()=>{
        tag === "all" ? setFiltered(data) : setFiltered(data.filter(each =>each.tag === tag))
    }, [tag])

    return ( 
        <div css={example02}>
            <Filter setTag={setTag}/>
            <motion.div layout css={card_list}>
                <AnimatePresence>
                {filtered.map((each) => (
                    <motion.div layout css={card} key={each.id}
                        animate={{opacity:1}}
                        initial={{opacity:0}}
                        exit={{opacity:0}}
                        transition={{duration:0.4}} 
                        >
                        <div css={card_header}>
                        <p>{each.tag}</p>
                        </div>
                        
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default Example02;

const Filter = ({setTag}) =>{
    const filter_container = css`
        /* emotion style here */
    `
    return (
        <div css={filter_container}>
            <button onClick={()=> setTag("all")}    >ALL</button>
            <button onClick={()=> setTag("framer")} >Framer Motion</button>
            <button onClick={()=> setTag("nav")}    >navigation</button>
            <button onClick={()=> setTag("modal")}  >modal</button>
        </div>
    )
}
```