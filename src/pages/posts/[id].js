import React, { useEffect } from 'react';
import Layout from '@components/layout';
import { getAllPostIds, getPostData } from '@lib/posts';
import Head from 'next/head';
import Date from '@components/date';
import wordCounter from '@components/word-counter';
import Comment from '@components/comment';
import setCommentScript from '@components/commentScript';
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
  const readingTime = wordCounter(postData.contentHtml);
  const commentBox = React.createRef();

  // Agrego el script de los comentarios con Utterances.
  useEffect(() => {
    const commentScript = setCommentScript();
    commentBox && commentBox.current ? commentBox.current.appendChild(commentScript) : console.error(`Error adding utterances comments on: ${commentBox}`);
  }, [commentBox]);

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
