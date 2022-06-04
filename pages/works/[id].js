import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import { motion, Variants } from "framer-motion";
import CompSelect from '../../components/works/CompSelect';
import styles from '../../styles/Works.module.css'

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

const title = css`
    position: absolute;
    top: 40px;
    left:   10%;
    color: #4a567e;
    font-size: 22px;
`;

const Work = ({markdown, mdFilesWithData}) => {
    useEffect(()=>{
        hljs.highlightAll();
    })
    console.log(markdown.data.id)

    return ( 
        <>
        <div className={styles.work_page}>
            <div css={title}>
                <h2>{markdown.data.title}</h2>
            </div>
                <CompSelect path={markdown.data.id} />
                {/* <Markdown >
                    {markdown.content}
                </Markdown> */}
        <Link href="/works">
            <button className={styles.btn}>一覧に戻る</button>
        </Link>
        <SideList mdlist={mdFilesWithData} />
        </div>
        
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