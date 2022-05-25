import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import Complist from '../../components/works/CompList'
import styles from '../../styles/Works.module.css'
import hljs from 'highlight.js/lib/core';
// ハイライトしたい言語
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
// CSS適用
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from 'react';

hljs.registerLanguage('javascript',javascript);
hljs.registerLanguage('xml',html);
hljs.registerLanguage('css',css);


const Work = ({markdown}) => {
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
        <div className="window">
            <div className="bloc_tabs">
                <div className="control">
                    <b className='b-1'>●</b><b className='b-2'>●</b><b className='b-3'>●</b>
                </div>
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>{markdown.data.title}
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}> code
                </button>
            </div>
            <div className="content_block">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <hr/><br/>
                    <Complist path={markdown.data.id} />
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Markdown >
                        {markdown.content}
                    </Markdown>
                </div>
            </div>
        </div>
        <Link href="/works">
            <button className={styles.btn}>一覧に戻る</button>
        </Link>
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
            markdown
        }
    }
}