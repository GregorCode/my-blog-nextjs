import Head from 'next/head';
import { useState } from 'react';
import Layout, { siteTitle } from '@components/layout';
import utilStyles from '@styles/utils.module.css';
import { getSortedPostsData } from '@lib/posts';
import Link from 'next/link';
import Date from '@components/date';

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.separation}`}>
        <div className={utilStyles.flexContainer}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
          <input className={utilStyles.inputBusqueda} value={busqueda} placeholder="Buscar en este Blog" onChange={handleChange} />
        </div>
        <ul className={utilStyles.list}>
          {posts &&
            posts.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`} passHref>
                  <span>{title}</span>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
