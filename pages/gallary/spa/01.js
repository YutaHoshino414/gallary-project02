import stars from './images/stars.png';
import moon from './images/moon.png';
import mt_behind from './images/mountains_behind.png';
import mt_front from './images/mountains_front.png';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from 'next/image';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';


const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(#2b1055, #7597de);
`;
const section = css`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    }
    img#moon{
        top: -100%;
        /* レイヤーを重ねたときにどのように重ねて表示するかの設定 */
        mix-blend-mode: screen;
    }
    img#stars{
    top: -100%;
    height: 100%;
    object-fit: cover;
    }
    img#mountains_behind{
    bottom: -100%;
    top: initial;
    }
    img#mountains_front{
    bottom: -150%;
    top: initial;
    }
`;

const text = css`
    position: absolute;
    color: #fff;
    font-size: 8vw;
    font-weight: 200;
    margin-right: -3000px;
    z-index: 1000;
    span{
    font-weight: 700;
    }
`
const play = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    margin-top: 60px;
    background: #fff;
    border-radius: 40px;
    border-style: none;
    font-size: 1.8em;
    color: #2b1055;
    z-index: 10000;
    cursor: pointer;
`

const Spa01 = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    const [replay,setReplay] = useState(false);
    
    const handleClick = ()=>{
        
            tl.current = gsap.timeline()      /* {repeat: 1} */
            .to(q("#play"), {
                ease:"back.in", 
                duration:0.8,
                top: 1500, 
            })
            .to(q('#stars'), {
                ease:"power1.in", 
                duration:1,
                top: 0, 
            })
            .to('#mountains_behind', {
                ease:"power2.out", 
                duration:1.2,
                bottom: 0, 
            })
            .to('#moon', {
                ease:"slow.in", 
                duration:0.9,
                top: 0, 
            })
            .to('#mountains_front', {
                ease:"elastic.inOut", 
                duration:1.5,
                bottom: 0, 
            })
            .to('#text', {
                ease:"back.inOut", 
                duration:1.0,
                marginRight:0
            })
            .to(q('#play'), {
                ease:"power2.out", 
                duration:1.5,
                top: 450, 
            })
            ; /* finally semicolon! */
            
    }

    return ( 
        <>
        <div css={container} ref={el}>
            <div css={section}>
                <img src={stars.src} alt="" id="stars"  />
                <img src={moon.src} alt=""  id="moon"  />
                <img src={mt_behind.src} alt=""  id="mountains_behind"  />
                <h3 id="text" css={text}><span>Next.js</span></h3>
                <button id="play" css={play} onClick={handleClick} >Play</button>
                <img src={mt_front.src} alt=""  id="mountains_front"  />
            </div>
        </div>
        </>
    );
    /* Next.jsのImageが使いにくいので、調べた際
    こちらを参考: https://jsnotice.com/posts/2021-06-21/ */
}

export default Spa01;