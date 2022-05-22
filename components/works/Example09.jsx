import Split from 'react-split';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";


const example09 = css`
    width: 90%;
    .gutter {
    background-color: rgb(0, 0, 0);
    background-repeat: no-repeat;
    background-position: 50%;
    }
    .gutter.gutter-horizontal {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
        cursor: col-resize;
        height: 100%;
        align-self: center;
        border-radius: 10px 0px 0px 10px;
    }
`
const split = css`
    display: flex;
    flex-direction: row;
    height: 400px;
`
const bg1 = css`
    background-color: rgb(202, 229, 253);
    /* white-space: nowrap; */
`
const bg2 = css`
    background-color: rgb(253, 244, 202);
    overflow: scroll;
    border-radius: 0px 10px 10px 0px;
    padding: 20px;
`


const Example09 = () => {
    
    return ( 
        <div css={example09}>
        <Split css={split} minSize={0} sizes={[0, 100]} gutterSize={10} >
            <div css={bg1}>
                <h1><a href="https://split.js.org/">Split.js</a></h1>
                <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Facere possimus ad tempora voluptatem aut quia, <br/>
                    magni temporibus eos numquam molestias consequatur facilis eveniet, <br/>
                    totam provident porro commodi accusantium aliquid minus! <br/>
                </pre>
                
            </div>
            <div css={bg2}>
                <div className="inner">
                    
                </div>
            </div>
        </Split>
        </div>
    );
}

export default Example09;