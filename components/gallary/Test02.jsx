/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; /* In order to make the plugins work in Next you need to import them from the dist folder:https://greensock.com/forums/topic/28476-gsap-3-doesnt-work-with-nextjs/ */
import { useEffect, useRef } from 'react';

const section = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const box = css`
    width: 60%;
    height: 70%;
    padding: 40px 20px;
    border: 15px solid #fff;
    background-color: #eee;
    transition: all .8s;
        box-shadow: inset 1px 1px 3px
        rgba(0,0,0,0.5),
        1px 1px 2px rgba(0,0,0,0.2),
        3px 25px 55px -1px rgba(0,0,0,0.5),
        -25px -25px 80px -15px rgba(255,255,255,0.9);
    
    overflow: hidden;
`;


const Test02 = () => {
    const el = useRef();

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, []);
    
    const setAnimation = () => {
        /* const active = gsap.utils.toArray('#active'); */
        /* console.log(active) */
        const q = gsap.utils.selector(el);
        console.log(q(".frame"))
        q(".frame").map((frame,i) => {
        gsap.fromTo(frame,
            { opacity: 1, scale: 0.5 }, //fromの設定
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power4.in",

                scrollTrigger: {
                    trigger: frame,
                    start:'top 60%',
                    end: 'top 20%',
                    /* markers: true */
            }
        })
        })
    };

    return ( 
        <div ref={el}>
            <div css={section}>
                <h2>Gallary02</h2>
            </div>

            <div css={section}>
            <div css={box} className="frame">
                <br/>
                test02!
            </div>
        </div>
        <div css={section}>
            <div css={box} className="frame">
                <br/>
                test02!
            </div>
        </div>
        <div css={section}>
            <div css={box} className="frame">
                <br/>
                test02!
            </div>
        </div>
        <div css={section}>
            <div css={box} className="frame">
                <br/>
                test02!
            </div>
        </div>
        </div>
    );
}

export default Test02;