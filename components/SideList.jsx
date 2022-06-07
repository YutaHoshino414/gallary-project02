/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import Link from 'next/link';

const section = css`
    position: absolute;
    right: 0;
    width: 200px;
    height: 100%;
    background-color: rgba(255,255,255, 0.1);
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`
const header = css`
    height: 80px;
    padding: 10px;
    color: #ffffff;
`;
const item_list = css`
    overflow: scroll;
    height: 80%;
    margin-bottom: 10px;
`;
const item = css`
    width: 90%;
    height: 100px;
    background-color: #ffffffda;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
`;

const SideList = ({mdlist}) => {
    return ( 
        <div css={section}>
            <div css={header}>
                <h2>CompList!</h2>
            </div>
            <div css={item_list}>
            {mdlist.map((md, i)=>(
                    <Link href={`/works/${md.data.id}`} key={i}  >
                <div css={item}  key={md.id}>
                    {md.data.title}
                </div>
                    </Link>
            ))}
            </div>
        </div>
    );
}

export default SideList;