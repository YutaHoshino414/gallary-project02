---
id: 6
title: 'example07'
excerpt: 'This is test excerpt of example07'
type: 'css'
---

## Only CSS
```
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import img01 from './example04/assets/pexels-1.jpg';
import img02 from './example04/assets/pexels-2.jpg';
import img03 from './example04/assets/pexels-3.jpg';
import Image from 'next/image';


const wrapper = css`
    margin:0 auto;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`;
const box = css`
    padding: 15px;
    border: 15px solid #fff;
    background-color: #eee;
    max-width: 200px;
    transition: all .8s;
    :hover{
        box-shadow: inset 1px 1px 3px
        rgba(0,0,0,0.5),
        1px 1px 2px rgba(0,0,0,0.2),
        3px 25px 55px -1px rgba(0,0,0,0.5),
        -25px -25px 80px -15px rgba(255,255,255,0.9)
    }
`;

const Example07 = () => {
    
    return ( 
        <div className='example07'>

            <div css={wrapper}>
                <div css={box}>
                    <Image src={img01} alt="" width={200} height={300} />
                </div>
                <div css={box}>
                    <Image src={img02} alt="" width={200} height={300} />
                </div>
                <div css={box}>
                    <Image src={img03} alt="" width={200} height={300} />
                </div>
            </div>
        </div>
     );
}
 
export default Example07;
```