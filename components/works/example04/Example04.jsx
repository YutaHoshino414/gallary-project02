import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import images from './images';
import Image from 'next/image';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

const bg = css`
    padding: 10px 20px;
    /* background-color: rgba(255,255,255); */
    /* box-Shadow: 0px 3px 10px rgba(0,0,0, 0.3); */
`
const item = css`
    min-height: 15rem;
    min-width: 20%;
    padding: 10px;
    img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    pointer-events: none;
    }
`;
const inner_carousel = css`
    display: flex;
    align-items: flex-start;  /* 画像潰れを防ぐ */
`;
const CarouselCss = css`
    cursor: grab;
    overflow: hidden;
` ;


const Example04 = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    
    useEffect(() =>{
        console.log(carousel)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return ( 
        <div className="example04">
            <div css={bg}>
            <motion.div 
                ref={carousel} 
                css={CarouselCss} 
                whileTap={{cursor:"grabbing"}}
                >
                <motion.div drag='x' dragConstraints={{right:0, left: -width}} css={inner_carousel}>
                    {images.map((image,i) => {
                        return(
                            <motion.div css={item} key={i}>
                                <Image src={image}  alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            </div>
        </div>
     );
}
 
export default Example04;