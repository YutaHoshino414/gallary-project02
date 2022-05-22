/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState } from "react";

const Tabs = css`
    width: 60%;
    height: auto;
    min-height: 300px;
    background: #053742;
    margin: .5rem auto 1.5rem;
    padding: 2rem 1rem;
    color: #E8F0F2;
    border-radius: 2rem;
    @media (max-width: 769px) {
    padding: 2rem 0;
    }
`
const nav = css`
    width: 60%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #39A2DB;
    border-radius: 2rem;
    padding-left: 0px;
    @media (max-width: 768px) {
        width: 90%;
    }
    li{
        width: 50%;
        padding: 0.5rem;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.7s;
        border-bottom-left-radius: 2rem;
        border-top-left-radius: 2rem;
    }
    li:nth-child(2) {
        border-radius: 0;
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
    }
    li:hover {
        background: rgba(50, 224, 196, 0.15);
    }
    li.active {
        background: #39A2DB;
    }
`

const Example05 = () => {
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
            {/* Tab nav */}
            <ul css={nav}>
                <li 
                className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}
                >Tab 1</li>
                <li 
                className={activeTab === "tab2" ? "active" : ""}
                onClick={handleTab2}
                >Tab 2</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    </>
     );
}
 
export default Example05;


const FirstTab = () => {
    return (
      <div className="FirstTab">
        <h1>example05</h1>
        <p>First Tab!! Hurray!!</p>
        <p>https://blog.logrocket.com/how-to-build-tab-component-react/</p>
      </div>
    );
  };

const SecondTab = () => {
    return (
      <div className="SecondTab">
        <p>Second Tab!! Hurray!!</p>
        {/* Second  tab content will go here */}
      </div>
    );
  };