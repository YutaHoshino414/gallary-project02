import styles from '../../styles/Works.module.css'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';


const Works = ({works}) => {
  console.log(works)

    return ( 
        <div className={styles.works}>
          <div className={styles.title}>
            <h1>Works</h1>
          </div>
          <h2>ALL</h2>
        <div className={styles.card_wrapper}>
            {works.map((work,i) => (
              <Link href={`/works/${i}`} key={i} >
              <div className={styles.card} >
                <h3>{work.frontmatter.title}</h3>

              </div></Link>
            ))}
        </div>
    </div>
    );
}

export default Works;

export async function getStaticProps(){
  const mdFiles = fs.readdirSync(path.join('markdown'))
  const works = mdFiles.map(filename =>{
    // slug(endpoint)
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('markdown', filename), 'utf-8'
    );

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })
  

  return {
      props:{
          works: works
      },
  }
}