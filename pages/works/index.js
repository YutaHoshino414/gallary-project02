import styles from '../../styles/Works.module.css'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { motion } from "framer-motion";
import { homecontainer, homeh2, homebtn,cards, card } from "../../components/Animations";

const Works = ({works}) => {
  console.log(works)

    return ( 
        <div className={styles.works}>
          <div className={styles.title}>
            <motion.h1 variants={homeh2}
              initial="hidden"
              animate="show"
              exit="hide"
            >Works</motion.h1>
            <motion.h2 variants={homeh2}
              initial="hidden"
              animate="show"
              exit="hide"
            >ALL</motion.h2>
          </div>
          <motion.div className={styles.card_wrapper} 
            variants={cards} 
            initial="hidden"
            animate="show"
            exit="hide"
          >
              {works.map((work,i) => (
                <Link href={`/works/${i}`} key={i} >
                  <motion.div className={styles.card} variants={card} >
                    <div className={styles.inner}>
                    <h3>{work.frontmatter.title}</h3>
                    <i>⚙️</i> 
                    </div>
                  </motion.div>
                </Link>
              ))}
          </motion.div>
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