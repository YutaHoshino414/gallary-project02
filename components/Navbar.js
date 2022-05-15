import Link from "next/link";
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';

const nav = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

const Nabvar = () => {
    return ( 
        <nav css={nav}>
            <div className="logo">
                
            </div>
        </nav>
    );
}

export default Nabvar;