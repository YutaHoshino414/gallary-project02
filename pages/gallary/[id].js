/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

const section = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const box = css`
    width: 60%;
    height: 50%;
    padding: 40px 20px;
    border: 15px solid #fff;
    background-color: #eee;
    transition: all .8s;
    :hover{
        box-shadow: inset 1px 1px 3px
        rgba(0,0,0,0.5),
        1px 1px 2px rgba(0,0,0,0.2),
        3px 25px 55px -1px rgba(0,0,0,0.5),
        -25px -25px 80px -15px rgba(255,255,255,0.9)
    }
    overflow: hidden;
`;

const Detail = () => {
    return ( 
        <>
        <div css={section}>
            <div css={box}>
                <br/>
                test
            </div>
        </div>
        <div css={section}>
            <div css={box}>
                <br/>
                test
            </div>
        </div>
        </>
    );
}

export default Detail;