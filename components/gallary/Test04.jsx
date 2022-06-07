
import { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import styles from '../../styles/Gallary.module.css'

import Temp01 from '../works/temp/Temp01';
import Temp02 from '../works/temp/Temp02';
import Temp03 from '../works/temp/Temp03';
import Example01 from '../works/Example01';

const container = css`
    background: linear-gradient(to top,#b9c6d2 0%,#d0dde9 10.45%,#edf0f8 41.35%); 
`
const section = css`
    height: 100vh;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Test04 = () => {
    return ( 
        <div css={container}>
            <div css={section}>
                <Temp01 ><Example01/></Temp01>
            </div>
            <div css={section}>
                <Temp02 ><Example01/></Temp02>
            </div>
            <div css={section}>
                <Temp03 ><Example01/></Temp03>
            </div>
        </div>
     );
}
 
export default Test04;
