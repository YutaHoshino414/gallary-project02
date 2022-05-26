import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import Complist from '../../components/works/CompList'
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
    height: 60%;
    border-radius: 10px;
    margin-right: 150px;
    box-shadow: 0px 10px 20px rgba(0,0,0, 0.3);
`
const bg1 = css`
    background-color: rgb(202, 229, 253);
    /* white-space: nowrap; */
    overflow: scroll;
`
const bg2 = css`
    background-color: rgba(240, 248, 255, 0.493);
    overflow: scroll;
    border-radius: 0px 10px 10px 0px;
`
const inner = css`
    padding: 20px;
`

const Work = ({markdown, mdFilesWithData}) => {
    useEffect(()=>{
        hljs.highlightAll();
    })

    console.log(markdown.data.id)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return ( 
        <div className={styles.work_page}>
        <Link href="/works">
            <button className={styles.btn}>一覧に戻る</button>
        </Link>
        <SideList mdlist={mdFilesWithData} />
        
        <Split css={split} minSize={0} sizes={[0, 100]} gutterSize={10} >
            <div css={bg1}>
                <h1>Split.js</h1>
                <pre>コンポーネントにmin-widthを指定すると潰れなくなる</pre>
                <Markdown >
                    {markdown.content}
                </Markdown>
            </div>
            <div css={bg2}>
                <div css={inner}>
                <Complist path={markdown.data.id} />
                </div>
            </div>
        </Split>
        </div>
        
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