/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import CompList from "../works/CompList";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; /* In order to make the plugins work in Next you need to import them from the dist folder:https://greensock.com/forums/topic/28476-gsap-3-doesnt-work-with-nextjs/ */
import { useEffect, useRef } from 'react';

const section = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const wrap = css`
    width: 60%;
    height: 80%;
`
const box = css`
    width: 100%;
    height: 80%;
    padding: 40px 20px;
    border: 15px solid #fff;
    background-color: #eee;
    transition: all .8s;
    :hover{
        box-shadow: inset 1px 1px 3px
        rgba(0,0,0,0.5),
        1px 1px 2px rgba(0,0,0,0.2),
        3px 25px 55px -1px rgba(0,0,0,0.5),
        -25px -25px 80px -15px rgba(255,255,255,0.9)
    }
    overflow: scroll;
`;

const reveal = css`
    color: #033663;
    font-size: 40px;
    /* text-align: center; */
        margin-top: 20px;
`

const Test01 = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    console.log(q("#active"))

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, []);
    
    const setAnimation = () => {
        /* const active = gsap.utils.toArray('#active'); */
        /* console.log(active) */
        q("#active").map((text,i) => {
        gsap.fromTo(text,
            { opacity: 0, x: -100 }, //fromの設定
            {
                opacity: 1,
            x: 550,
            scrollTrigger: {
                trigger: text,
                start:'top 90%',
                end: 'top 20%',
                /* markers: true */
            }
        })
        })
    };

    return ( 
        <div ref={el}>
            <div css={section}>Gallary01</div>
            {CompList.map((comp)=>(
            <div css={section} key={comp.id}>
                <div css={wrap}  >
                    <div css={box}>
                        <br/>
                        {comp.element}
                    </div>
                    <h2 css={reveal} id="active">{comp.slug}</h2>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Test01;