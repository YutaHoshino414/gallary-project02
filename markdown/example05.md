---
id: 4
title: 'example05'
excerpt: 'This is test excerpt of example05'
type: ''
---

```
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { useState } from "react";

const Tabs = css`
    /* emotion style here */
`
const nav = css`
    /* emotion style here */
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
```