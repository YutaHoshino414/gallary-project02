---
id: 2
title: 'example03'
excerpt: 'This is test excerpt of example03'
type: ''
---

```js
import {motion, AnimatePresence} from 'framer-motion';
import { useImperativeHandle, useRef } from 'react';
import { forwardRef, useState } from 'react';

/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

const example03 = css`
    /* emotion style here */
`;
const outer = css`
    /* emotion style here */
`;
const Button = css`
    /* emotion style here */
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
    /* emotion style here */
`
const modal_content_wrapper =css`
    /* emotion style here */
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

```