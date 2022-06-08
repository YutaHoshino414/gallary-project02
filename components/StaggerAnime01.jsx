/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";

const container = css`
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
`
const staggered = css`
    width: 10%;
    height: 100vh; 
    background-color: aliceblue;
    z-index: 1;
`;
const staggered2 = css`
    width: 10%;
    height: 100vh; 
    background-color: white;
    z-index: 1;
`;

const StaggerAnime01 = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    useEffect(()=>{
        gsap.to(".elem", {
            height: 0,
            opacity: 0.5,
            stagger: 0.1  //0.2秒遅れてそれぞれ再生
        });
            
    })
    return ( 
        <div css={container} ref={el}>
            <div css={staggered} className="elem"></div>
            <div css={staggered2} className="elem"></div>
            <div css={staggered} className="elem"></div>
            <div css={staggered2} className="elem"></div>
            <div css={staggered} className="elem"></div>
            <div css={staggered2} className="elem"></div>
            <div css={staggered} className="elem"></div>
            <div css={staggered2} className="elem"></div>
            <div css={staggered} className="elem"></div>
            <div css={staggered2} className="elem"></div>
        </div>
     );
}
 
export default StaggerAnime01;