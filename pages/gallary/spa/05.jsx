import bg from './images/bg.jpg';
import man from './images/man.png';
import cloud1 from './images/clouds_1.png';
import cloud2 from './images/clouds_2.png';
import mountainLeft from './images/mountain_left.png';
import mountainRight from './images/mountain_right.png';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { homecontainer } from "../../../components/Animations";


const section = css`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* pointer-events: none; */
    }
    #man{
        transform-origin: bottom;
    }
    h2{
        position: relative;
        color: #fff;
        font-size: 10vw;
    }
    ::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(to top, #fff, transparent);
        z-index: 100;
    }
`;
const sec = css`
    position: relative;
    padding: 100px;
    background-color: #fff;
    h2{
        font-size: 3.5em;
        margin-bottom: 10px;
        color: #20496a;
    }
`
const cover = css`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    position: absolute;
    top: 0;
    z-index: 1;
`

const Spa05 = () => {
    const el = useRef();
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, []);
    const setAnimation = () => {
        const q = gsap.utils.selector(el);
        console.log(q("#bg"))
        gsap.to(q("#bg"),{
            scrollTrigger:{
                scrub:1
            },
            scale:1.5
        });

        gsap.to(q("#man"),{
            scrollTrigger:{
                scrub:1
            },
            scale:0.5
        });

        gsap.fromTo(q("#mountain_left"),
            {x: -200},
            {x : -500, scrollTrigger:{scrub:1}}
        );
        gsap.fromTo(q("#mountain_right"),
        {x: 200},
        {x : 500, scrollTrigger:{scrub:1}}
        );

        gsap.to(q("#cloud1"),{
            scrollTrigger:{
                scrub:1
            },
            x : 200,
        });
        gsap.to(q("#cloud2"),{
            scrollTrigger:{
                scrub:1
            },
            x : -200,
        });

        gsap.fromTo(q("#text"),
        {y: -200},
        {y : 500,
            scrollTrigger:{
                scrub:1
            },
        });
    }

    return ( 
        <>
        <div css={section} ref={el}>
            <img src={bg.src} alt="" id="bg" />
            <h2 id="text">Mountains</h2>
            <img src={man.src} alt="" id="man" />
            <img src={cloud1.src} alt="" id="cloud1" />
            <img src={cloud2.src} alt="" id="cloud2" />
            <img src={mountainLeft.src} alt="" id="mountain_left" />
            <img src={mountainRight.src} alt="" id="mountain_right" />
        </div>
        <div css={sec}>
            <h2>ScrollTrigger is Awesome</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus laboriosam voluptatum minima dicta quam. Rerum nemo veniam saepe minima dolorum corrupti, numquam dolor molestias iusto illum quis! Voluptates, sed libero?
            Itaque nulla cum dolorum dolores aperiam possimus quam incidunt voluptates similique unde! Debitis veniam sit minus numquam ducimus officiis blanditiis totam, ad quaerat eius necessitatibus dolore vel, modi quas amet.
            Ad aliquid illo aut? Qui deserunt nisi quasi, quibusdam maiores, possimus aliquam commodi nostrum eos rerum atque? Nostrum doloremque, sapiente a amet provident consequatur corrupti illo cum eveniet non vero.
            Labore necessitatibus ullam in laudantium at quod, deleniti dolores recusandae, voluptates dignissimos impedit quos facilis ut odio voluptatibus deserunt, temporibus veritatis. Itaque dolores voluptatibus ducimus reiciendis consequuntur repellat delectus sit.
            Totam aut alias itaque dolorem assumenda nostrum, neque est placeat dignissimos necessitatibus reprehenderit distinctio ea hic quam, illo cum voluptates. Sunt beatae dicta odit? Alias illo deserunt non nulla voluptas.
            Reprehenderit repellat quidem odio, porro mollitia possimus eaque veniam unde optio, vel exercitationem voluptas molestias minus ad harum pariatur accusamus animi sint placeat excepturi! Sit at inventore quos nam dolor.
            Magnam illum, officiis hic pariatur dolorem harum eaque fugit facere voluptatum necessitatibus, distinctio, dolor porro. Unde quos vel consequatur est, molestiae omnis ducimus blanditiis cumque reiciendis explicabo non error rerum.</p>
            <br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus laboriosam voluptatum minima dicta quam. Rerum nemo veniam saepe minima dolorum corrupti, numquam dolor molestias iusto illum quis! Voluptates, sed libero?
            Itaque nulla cum dolorum dolores aperiam possimus quam incidunt voluptates similique unde! Debitis veniam sit minus numquam ducimus officiis blanditiis totam, ad quaerat eius necessitatibus dolore vel, modi quas amet.
            Ad aliquid illo aut? Qui deserunt nisi quasi, quibusdam maiores, possimus aliquam commodi nostrum eos rerum atque? Nostrum doloremque, sapiente a amet provident consequatur corrupti illo cum eveniet non vero.
            Labore necessitatibus ullam in laudantium at quod, deleniti dolores recusandae, voluptates dignissimos impedit quos facilis ut odio voluptatibus deserunt, temporibus veritatis. Itaque dolores voluptatibus ducimus reiciendis consequuntur repellat delectus sit.
            Totam aut alias itaque dolorem assumenda nostrum, neque est placeat dignissimos necessitatibus reprehenderit distinctio ea hic quam, illo cum voluptates. Sunt beatae dicta odit? Alias illo deserunt non nulla voluptas.
            Reprehenderit repellat quidem odio, porro mollitia possimus eaque veniam unde optio, vel exercitationem voluptas molestias minus ad harum pariatur accusamus animi sint placeat excepturi! Sit at inventore quos nam dolor.
            </p>
            </div>
            <motion.div css={cover}
                variants={homecontainer}
                initial="show"
                animate="hide"
                exit="show"
            ></motion.div>
        </>
    );
}

export default Spa05;