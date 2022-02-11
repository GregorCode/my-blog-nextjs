import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@components/footer';
import styles from '@styles/layout.module.scss';

export const siteTitle = `GregorCode`;
const name = `() => { ${siteTitle} }`;

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image priority src="/images/logo.svg" height={130} width={130} alt={name} />
              <h1 className={styles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <a>
                  <Image priority src="/images/logo.svg" height={100} width={100} alt={name} />
                </a>
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
