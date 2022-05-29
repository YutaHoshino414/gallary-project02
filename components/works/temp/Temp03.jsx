/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState } from 'react';

import styles from '../../../styles/Works.module.css'
import Split from 'react-split';


const split = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 65%;
    border-radius: 10px;
    margin-right: 100px;
`
const bg1 = css`
    background: #373a47;
    /* white-space: nowrap; */
    overflow: scroll;
    border-radius: 10px 0px 0px 10px;
`
const bg2 = css` 
    background: linear-gradient(to top,#b9c6d2 0%,#d0dde9 10.45%,#edf0f8 41.35%); 
    overflow: scroll;
    border-radius: 0px 10px 10px 0px;
    box-shadow: inset 5px 0px 5px rgba(0,0,0,.3),
            inset -5px -0px 15px rgba(0,0,0,.3);
`
const inner = css`
    height: 100%;
    padding: 40px 40px;
    
    /* コンポーネントにmin-widthを指定すると潰れなくなる */
`

const Temp03 = ({children}) => {
    console.log(children)
    return ( 
        <>
        <Split css={split} minSize={0} sizes={[0, 100]} gutterSize={10}  >
            <div css={bg1}>
            <div css={inner}>
            {children[1]}
            </div>
            </div>
            <div css={bg2}>
                <div css={inner}>
                {children[0]}
                </div>
            </div>
        </Split>
        </>
     );
}
 
export default Temp03;