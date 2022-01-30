import Layout from "@components/layout";
import { getAllPostIds, getPostData } from "@lib/posts";
import Head from "next/head";
import Date from "@components/date";
import utilStyles from "@styles/utils.module.css";
import WordCounter from "@components/word-counter";

export default function Post({ postData }) {
  const readingTime = WordCounter(postData.contentHtml);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightUppercaseText}>
          <div>Por {postData.author}</div>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div>Lectura de {readingTime} min</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

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
