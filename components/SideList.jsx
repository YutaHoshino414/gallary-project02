/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import Link from 'next/link';

const section = css`
    position: absolute;
    right: 0;
    width: 200px;
    height: 90%;
    background-color: rgba(255,255,255, 0.1);
    
    /* margin-left: 100px; */
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`
const header = css`
    height: 80px;
    padding: 10px;
    color: #4a567e;
`;
const item_list = css`
    overflow: scroll;
    height: 80%;
    margin-bottom: 10px;
`;
const item = css`
    width: 80%;
    height: 100px;
    background-color: #88888885;
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
            {mdlist.map((md)=>(
                    <Link href={`/works/${md.data.id}`} key={md.id}  >
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