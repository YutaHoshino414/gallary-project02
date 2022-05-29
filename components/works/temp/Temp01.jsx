import { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import styles from '../../../styles/Works.module.css'

import hljs from 'highlight.js/lib/core';


const window = css`
    position: absolute;
    top: 100px;
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 11%;
	background: rgba(228, 226, 226, 0.1);
	margin-right: 100px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	box-shadow: 1px 10px 20px rgba(0,0,0, 0.2);
@media (max-width: 1280px) {
    .window{width: 70%;}
}
`;

const tabs_block = css`
	display: flex;
	padding-top: 10px;
    button {
        border: none;
        border-radius: 10px 10px 0 0;
        padding: 10px;
        text-align: center;
        width: 20%;
        background: rgba(128, 128, 128, 0.075);
        cursor: pointer;
        position: relative;
        color: rgb(114, 114, 114);
    }
    button.active {
	background: white;
	border-radius: 10px 10px 0 0;
}
`;
const control = css`
	margin: 0 30px;
    b {
    padding: 5px;
    font-size: 12px;
    }
`;
const b_1 = css`
    color: red;
`;
const b_2 = css`
    color: rgb(255, 208, 0);
`;
const b_3 = css`
    color: rgb(72, 255, 0);
`;
const content_block = css`
	flex-grow : 1;
	border-radius: 0 0 10px 10px;
    .active-content {
	display: block;
    }
`;
const menu = css`
    width: 100%;
    height: 40px;
    background: white;
    position: relative;
`;
const content_main = css`
    border-top: 1px solid #dadada;
    padding: 10px 30px;
    height: 400px;
    border-radius: 0 0 10px 10px;
    overflow: scroll;
    background: linear-gradient(to top,#b9c6d2 0%,#d0dde9 10.45%,#edf0f8 41.35%); 
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`;
const content = css`
    display: none;
`

const Temp01 = ({children}) => {
    const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
        setToggleState(index);
    };
    useEffect(()=>{
        hljs.highlightAll();
    })

    return ( 
        <>
            <div css={window}>
                <div css={tabs_block}>
					<div css={control}>
                        <b css={b_1}>●</b><b css={b_2}>●</b><b css={b_3}>●</b>
                    </div>
					<button
                        className={toggleState === 1 ? "active" : ""}
                        onClick={() => toggleTab(1)}> component
                    </button>
					<button className={toggleState === 2 ? "active" : ""}
                        onClick={() => toggleTab(2)}> code
                    </button>
				</div>
				<div css={content_block} id="target">
                    <div css={content} className={toggleState === 1 ? "active-content" : ""}>
                        <div css={menu}>
                            
                        </div>
                        <div css={content_main}>
                            {children[0]}
                        </div>
                    </div>
                    <div css={content} className={toggleState === 2 ? "active-content" : ""}>
                        <div css={menu}>
                            
                        </div>
                        <div css={content_main}>
                            {children[1]}
                        </div>
                    </div>
				</div>
            </div>
        </>
    );
}

export default Temp01;