import { useState } from "react";
/** @jsxImportSource @emotion/react */      /* Create React Appの場合、コメントがないとエラー */
import { css } from "@emotion/react";


const Example05 = () => {
  const [background, setBackground] = useState("#fcfcfc");
  const [font, setFont] = useState("#424246");
  const [fontFamily, setFontFamily] = useState("Poppins");

  const setStyle = (background, font, fontFamily) => {
    setBackground(background);
    setFont(font);
    setFontFamily(fontFamily);
    console.log(fontFamily);
  };

  const example08 = css`
    padding: 10px;
    width:55%
  `
  const card = css`
    width: 450px;
    padding: 60px;
    background-color: ${background};
    h1 {
      font-family: "Abril Fatface", cursive;
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 10px;
      color: ${font};
    }
    p {
      font-family: ${fontFamily}, sans-serif;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 15px;
      color: ${font};
    }
    a{
      color: #47eaff;
    }
  `
  const cardButtons = css`
    button {
      font-family: ${fontFamily}, sans-serif;
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
`;
  const blackButton = css`
    color: #fdfdfd;
    background-color: #424246;
  `;

  const blueButton = css`
  color: #fdfdfd;
  background-color: #1d499b;
`;
  const yellowButton = css`
    color: #424246;
    background-color: #f9d648;
  `;

  return ( 
    <>
      <div css={example08}>
      <div css={card}>
        <h1>Your Life is The Best</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Pulvinar sedelementum egestas blandit.<br/>
          <a href="https://codesandbox.io/s/change-state-onmouseenter-onmouseout-before-c51lk?file=/src/components/Card.jsx:1906-2375" target="_blank" rel="noreferrer">
          codesandbox.
          </a>
          <a href="https://www.youtube.com/watch?v=SzYnG9mVDF4" target="_blank" rel="noreferrer">
            WATCH on youtube
          </a> 
        </p>
        <div css={cardButtons}>
          <button
              onMouseEnter={() => setStyle("#424246", "#fdfdfd", "Montserrat")}
              onMouseOut={() => setStyle("#fdfdfd", "#424246", "Poppins")}
              css={blackButton}
            >
              Black
          </button>
          <button
          onMouseEnter={() => setStyle("#1d499b", "#fdfdfd", "Open Sans")}
          onMouseOut={() => setStyle("#fdfdfd", "#1d499b", "Poppins")}
          css={blueButton}
        >
          Blue
        </button>
        <button
          onMouseEnter={() => setStyle("#f9d648", "#424246", "Raleway")}
          onMouseOut={() => setStyle("#424246", "#f9d648", "Poppins")}
          css={yellowButton}
        >
          Yellow
        </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Example05;

