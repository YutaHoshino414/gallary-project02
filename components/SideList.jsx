/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import Link from 'next/link';

const section = css`
    position: absolute;
    right: 0;
    width: 200px;
    height: 100vh;
    background-color: #ffffff14;
    
    /* margin-left: 100px; */
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`
const header = css`
    height: 70px;
    color: #ec8f03;
    padding: 10px;
`
const item_list = css`
    overflow: scroll;
    height: 90%;
    
`
const item = css`
    width: 90%;
    height: 120px;
    background-color: #63646450;
    margin: 10px;
`
const SideList = ({mdlist}) => {
    return ( 
        <div css={section}>
            <div css={header}>
                <h2>sideList!</h2>
            </div>
            <div css={item_list}>
            {mdlist.map((md)=>(
                <div css={item}  key={md.id}>
                    <Link href={`/works/${md.data.id}`}>
                    {md.data.title}
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
}

export default SideList;