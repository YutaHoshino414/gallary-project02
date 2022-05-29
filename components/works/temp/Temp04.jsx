import {motion, AnimatePresence} from 'framer-motion';
import { useImperativeHandle, useRef } from 'react';
import { forwardRef, useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';

/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

const example03 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        color:#c4955e;
    };
`;

const Button = css`
    position: absolute;
    top: 100px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #6900f1;
    color: #fff;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
`;

const Temp04 = ({children}) => {
    console.log(children)
    useEffect(()=>{
        hljs.highlightAll();
    })
    const modalRef = useRef();
    return ( 
            <div css={example03}>
                <button css={Button} onClick={()=> modalRef.current.open()}>Code</button>
                <Modal ref={modalRef}>
                    {children}
                </Modal>
            </div>
    );
}
 
export default Temp04;


const modal_backdrop = css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`
const modal_content_wrapper =css`
    position: fixed;
    width: 800px;
    height: 600px;
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    z-index: 2;
    overflow: scroll;
`

const Modal = forwardRef(function Modal(props, ref) {
    const [Open, setOpen] = useState(false);
    
    useImperativeHandle(ref, ()=>{
        return {
            open: ()=> setOpen(true),
            close: ()=> setOpen(false)
        }
    })

    return (
        <AnimatePresence>
            {Open && (
            <>
            <motion.div css={modal_backdrop}
                initial={{opacity: 0}}
                animate={{opacity:1,}}
                onClick={ ()=> setOpen(false)}
            />
            <motion.div css={modal_content_wrapper}
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration:0.4}}
                style={{borderRadius: "1rem", boxShadow:"0px 20px 40px rgba(0,0,0, 0.5)"}}
            >
                <motion.div className='modal-content'>{props.children}</motion.div>
            </motion.div>
            </>
            )}
        </AnimatePresence>
    )
});