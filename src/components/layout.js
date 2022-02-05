import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@components/footer';
import styles from '@styles/layout.module.scss';

const name = '() => { GregorCode }';
export const siteTitle = `BLOG de Gregorys González`;

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Learn how to build a personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image priority src="/images/profile.jpg" className={styles.borderCircle} height={144} width={144} alt={name} />
              <h1 className={styles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <>
                  <Image priority src="/images/profile.jpg" className={styles.borderCircle} height={108} width={108} alt={name} />
                </>
              </Link>
              <h2 className={styles.headingLg}>
                <Link href="/" passHref>
                  <span className={styles.colorInherit}>{name}</span>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/" passHref>
              <span>← Ir al inicio</span>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
