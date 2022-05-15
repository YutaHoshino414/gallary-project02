import { scaleRotate as Menu } from 'react-burger-menu'
import Link from "next/link";
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';


const list_item = css`
    margin-top: 50px;
    li{
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 24px;
    }
    a:hover{
        color: #1d629b;
    }
`

export default props => {
    return ( 
        <Menu width={ 280 }  {...props}>
            <div>
                <h1>Next Gallary</h1>
            </div><br/>
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

