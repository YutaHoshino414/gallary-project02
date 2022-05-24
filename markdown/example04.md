---
id: 3
title: 'example04'
excerpt: 'This is test excerpt of example04'
type: ''
---

```js
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import images from './images';
import Image from 'next/image';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

const bg = css`
    /* emotion style here */
`
const item = css`
    /* emotion style here */
`;
const inner_carousel = css`
    /* emotion style here */
`;
const CarouselCss = css`
    /* emotion style here */
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
```