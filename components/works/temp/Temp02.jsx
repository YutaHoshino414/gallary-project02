/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

import hljs from 'highlight.js/lib/core';

const wrap = css`
    margin-right: 100px;
    width: 70%;
    height:70%;

`
const Tabs = css`
    width: 100%;
    height: 80%;
    box-Shadow: 0px 3px 10px rgba(0,0,0, 0.3);
    padding: 2rem;
    border-radius: 1rem;
    @media (max-width: 769px) {
    padding: 2rem 0;
    }
`
const nav = css`
    width: 50%;
    margin: .5rem auto;
    display: flex;
    justify-content: space-between;
    border: 1px solid #39A2DB;
    color: #035a70;
    border-radius: 2rem;
    padding-left: 0px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        width: 90%;
    }
    li{
        width: 60%;
        padding: 0.5rem;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.7s;
        border-bottom-left-radius: 2rem;
        border-top-left-radius: 2rem;
    }
    li:nth-of-type(2) {
        border-radius: 0;
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
    }
    li:hover {
        background: rgba(255, 255, 255, 0.35);
    }
    li.active {
        background: #39A2DB;
    }
`
const Outlet = css`
    height: 100%;
    overflow: scroll;
`

const Temp02 = ({children}) => {
    useEffect(()=>{
        hljs.highlightAll();
    })

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
        };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
        };

    return ( 
        <div css={wrap}>
            <ul css={nav}>
            <li className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}
            >Component</li>
            <li className={activeTab === "tab2" ? "active" : ""}
                onClick={handleTab2}
            >Code</li>
            </ul>
            <div css={Tabs}>
                <div css={Outlet}>
                    {activeTab === "tab1" ? 
                    <FirstTab >{children[0]} </FirstTab> : 
                    <SecondTab >{children[1]}</SecondTab>
                    }
                </div>
            </div>
        <br/>
    </div>
    );
}

export default Temp02;

const FirstCont = css`
    
`;

const secondCont = css`
   
`;

const FirstTab = ({children}) => {
    return (
      <div css={FirstCont}>
        <br/>
        {children[0]}
      </div>
    );
  };

const SecondTab = ({children}) => {
    return (
      <div css={secondCont}>
        {/* Second  tab content will go here */}
        {children}
      </div>
    );
  };