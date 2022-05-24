---
id: 5
title: 'example06'
excerpt: 'This is test excerpt of example06'
type: ''
---

```
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState } from "react";
import Example01 from "./Example01";


const Tabs = css`
    /* emotion style here */
`
const nav = css`
    /* emotion style here */
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
```