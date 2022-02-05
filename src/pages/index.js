import Head from 'next/head';
import { useState } from 'react';
import Layout, { siteTitle } from '@components/layout';
import { getSortedPostsData } from '@lib/posts';
import Link from 'next/link';
import Date from '@components/date';
import styles from '@styles/pages.module.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [posts, setPosts] = useState(allPostsData);
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarPost(e.target.value);
  };

  const filtrarPost = (terminoBusqueda) => {
    const resultadoBusqueda = allPostsData.filter((post) => {
      if (post.title.toString().toLowerCase().includes(terminoBusqueda.toString().toLowerCase())) {
        return post;
      }
    });
    setPosts(resultadoBusqueda);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${styles.headingMd} ${styles.padding1px} ${styles.separation}`}>
        <div className={styles.flexContainer}>
          <h2 className={styles.headingLg}>Posts</h2>
          <input className={styles.inputBusqueda} value={busqueda} placeholder="Buscar en este Blog" onChange={handleChange} />
        </div>
        <ul className={styles.list}>
          {posts &&
            posts.map(({ id, date, title }) => (
              <li className={styles.listItem} key={id}>
                <Link href={`/posts/${id}`} passHref>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={styles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
