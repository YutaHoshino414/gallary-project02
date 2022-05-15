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
                <h1>Comp List</h1>
            </div>
        </nav>
    );
}

export default Nabvar;