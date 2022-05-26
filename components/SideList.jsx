/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import Link from 'next/link';

const section = css`
    position: absolute;
    right: 0;
    width: 230px;
    height: 100vh;
    background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
    overflow: scroll;
    margin-left: 100px;
`
const item = css`
    width: 90%;
    height: 120px;
    background-color: #ffffff3d;
    margin: 10px;
`
const SideList = ({mdlist}) => {
    return ( 
        <div css={section}>
        sideList!
        {mdlist.map((md)=>(
            <div css={item}>
                <Link href={`/works/${md.data.id}`} key={item.id}>
                {md.data.title}
                </Link>
            </div>
        ))}
        </div>
    );
}

export default SideList;