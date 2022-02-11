import React, { useEffect } from 'react';
import Layout from '@components/layout';
import { getAllPostIds, getPostData } from '@lib/posts';
import Head from 'next/head';
import Date from '@components/date';
import WordCounter from '@components/word-counter';
import Comment from '@components/comment';
import styles from '@styles/pages.module.scss';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const readingTime = WordCounter(postData.contentHtml);
  const commentBox = React.createRef();

  // Add comments script with Utterances.
  useEffect(() => {
    const commentScript = document.createElement('script');
    // const theme = typeof window !== 'undefined' && localStorage.getItem(Theme) === DarkTheme ? 'github-dark' : 'github-light';
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', 'GregorCode/comentarios-del-blog');
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('theme', 'github-light');
    commentScript.setAttribute('crossorigin', 'anonymous');

    commentBox && commentBox.current ? commentBox.current.appendChild(commentScript) : console.error(`Error adding utterances comments on: ${commentBox}`);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightUppercaseText}>
          <div>Por {postData.author}</div>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div>Lectura de {readingTime} min</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div>
        <div className={styles.postComments}>
          <h2>Comentarios</h2>
          <Comment commentBox={commentBox} />
        </div>
      </div>
    </Layout>
  );
}
