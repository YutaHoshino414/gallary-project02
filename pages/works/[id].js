import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';

import CompSelect from '../../components/works/CompSelect';
import styles from '../../styles/Works.module.css'
import Split from 'react-split';
import hljs from 'highlight.js/lib/core';
// ハイライトしたい言語
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import csshl from 'highlight.js/lib/languages/css';
// CSS適用
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from 'react';
import SideList from '../../components/SideList';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

hljs.registerLanguage('javascript',javascript);
hljs.registerLanguage('xml',html);
hljs.registerLanguage('css',csshl);

const split = css`
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 65%;
    border-radius: 10px;
    margin-right: 150px;
    /* box-shadow: 0px 10px 20px rgba(0,0,0, 0.3); */
`
const bg1 = css`
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    /* white-space: nowrap; */
    overflow: scroll;
    border-radius: 10px 0px 0px 10px;
    box-shadow: inset 0px 0px 5px rgba(0,0,0,.3),
            inset -5px -5px 25px rgba(0,0,0,.1);
`
const bg2 = css`
    /* background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);  */  
    background: linear-gradient(to top,#b9c6d2 0%,#d0dde9 10.45%,#edf0f8 41.35%); 
    
    overflow: scroll;
    border-radius: 0px 10px 10px 0px;
    box-shadow: inset 5px 0px 5px rgba(0,0,0,.3),
            inset -5px -0px 15px rgba(0,0,0,.3);
`
const inner = css`
    height: 100%;
    padding: 40px 40px;
    
    /* コンポーネントにmin-widthを指定すると潰れなくなる */
`

const Work = ({markdown, mdFilesWithData}) => {
    useEffect(()=>{
        hljs.highlightAll();
    })
    console.log(markdown.data.id)

    return ( 
        <>
        <div className={styles.work_page}>
        
        <Split css={split} minSize={0} sizes={[0, 100]} gutterSize={10}  >
            <div css={bg1}>
            <div css={inner}>
                <Markdown >
                    {markdown.content}
                </Markdown>
            </div>
            </div>
            <div css={bg2}>
                <div css={inner}>
                <CompSelect path={markdown.data.id} />
                </div>
            </div>
        </Split>
        <Link href="/works">
            <button className={styles.btn}>一覧に戻る</button>
        </Link>
        <SideList mdlist={mdFilesWithData} />
        </div>
        {/* <div className={styles.work_page}>
            <Complist path={markdown.data.id} />
        <SideList mdlist={mdFilesWithData} />
        </div> */}
        </>
    );
}

export default Work;

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('markdown'))
    const paths = files.map((filename, index )=> {
        return {
            params:{
                /* id: filename.replace('.md', ''), */
                id: index.toString(),
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({params})=>{
    const mdFiles = fs.readdirSync(path.join('markdown'))
    const mdFilesWithData = mdFiles.map((file)=>{
        
        const markdownWithMeta = fs.readFileSync(path.join('markdown', file), 'utf-8')
        const {data:frontmatter,content} = matter(markdownWithMeta)
        return {data:frontmatter,content}
    })
    const num = Number(params.id)
    const markdown = mdFilesWithData[num]

    return{
        props: {
            markdown,
            mdFilesWithData
        }
    }
}