import { scaleRotate as Menu } from 'react-burger-menu'
import Link from "next/link";
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';

const title = css`
    width: 100%;
    height: 80px;
    padding: 40px 20px 10px;
    background-color: rgb(17, 38, 105);
    h1{
        color: #c5ac1c;
    }
`
const list_item = css`
    margin-top: 0px;
    padding: 30px;
    li{
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 20px;
    }
    a:hover{
        color: #29a4dd;
    }
`

const SideMenu = props => {
    return ( 
        <Menu width={ 260 }  {...props}>
            <div css={title}>
                <h1>React Gallary</h1>
            </div>
            <div css={list_item}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/works"><a>Works</a></Link></li>
                    <li><Link href="/gallary"><a>Gallary</a></Link></li>
                </ul>
            </div>
        </Menu>
    );
}

export default SideMenu;