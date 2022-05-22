import {motion, AnimatePresence} from 'framer-motion';
import { useImperativeHandle, useRef } from 'react';
import { forwardRef, useState } from 'react';

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
const outer = css`
    padding: 60px 100px;
    margin: 20px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 5px;
    box-Shadow: 0px 3px 10px rgba(0,0,0, 0.3);
`;
const Button = css`
    padding: 15px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #6900f1;
    color: #fff;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
`;


const Example03 = () => {
    const modalRef = useRef();
    return ( 
            <div css={example03}>
                <div css={outer}>
                    <button css={Button} onClick={()=> modalRef.current.open()}>Example03</button>
                    <Modal ref={modalRef}>
                        <h1>hello world</h1><br/>
                        <a href="https://www.youtube.com/watch?v=sxFyVfb5RME" target="_blank" rel="noreferrer">
                            https://www.youtube.com/watch?v=sxFyVfb5RME
                        </a>
                    </Modal>
                </div>
            </div>
    );
}
export default Example03;

const modal_backdrop = css`
position: fixed;
height: 100vh;
width: 100vw;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.6);
`
const modal_content_wrapper =css`
position: fixed;
width: 600px;
height: 400px;
background: white;
margin: auto;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding: 50px;
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