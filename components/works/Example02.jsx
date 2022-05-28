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
    width: 90%;
    min-width: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
`;
const card_list = css`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`;
const card = css`
    width: 120px;
    height: 150px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`;
const card_header = css`
    width: 100%;
    height: 70px;
    padding: 20px;
    border-radius: 10px 10px 40% 0;
    background-image: linear-gradient(to bottom left, 
        #3ab3e2 10%, #1078bd 115%);
    p{
        color: white;
    }
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
        padding-bottom: 30px;
        button{
            margin-right: 1rem;
            min-width: 5rem;
            padding: 0.5rem 1rem;
            border: none;
            background: white;
            border-radius: 1rem;
            border: 1px solid rgb(65, 98, 168);
            font-weight: bold;
            cursor: pointer;
        }
        button.active {
            background: rgb(65, 98, 168);
            color: white;
        }
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