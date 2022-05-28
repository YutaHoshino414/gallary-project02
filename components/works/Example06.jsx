/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState } from "react";
import Example01 from "./Example01";


const Tabs = css`
    width: 80%;
    min-width: 500px;
    height: auto;
    min-height: 400px;
    background: rgba(255,255,255, 0.1); 
    box-Shadow: 0px 3px 10px rgba(0,0,0, 0.3);
    margin: 0 auto 2rem;
    padding: 1rem;
    border-radius: 1rem;
    @media (max-width: 769px) {
    padding: 2rem 0;
    }
`
const nav = css`
    width: 60%;
    margin: .5rem auto;
    display: flex;
    justify-content: space-between;
    border: 1px solid #39A2DB;
    color: #E8F0F2;
    border-radius: 2rem;
    padding-left: 0px;

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
    height: 300px;
`

const Example06 = () => {
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
        <>
        <div css={Tabs}>
            <div css={Outlet}>
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
            <ul css={nav}>
            <li className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}
            >Tab 1</li>
            <li className={activeTab === "tab2" ? "active" : ""}
                onClick={handleTab2}
            >Tab 2</li>
            </ul>
        </div>
        {/* Tab nav */}
        <br/>
    </>
    );
}

export default Example06;

const FirstCont = css`
    padding: 40px;
    h1{
        margin: 0;
    }
`;
const FirstTab = () => {
    return (
      <div css={FirstCont}>
        <br/>
        <Example01 />
      </div>
    );
  };

const SecondTab = () => {
    return (
      <div className="SecondTab">
        
        {/* Second  tab content will go here */}
      </div>
    );
  };