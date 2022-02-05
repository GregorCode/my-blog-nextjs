import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/about" passHref>
        <>
          <Image src="/images/about.png" alt="about" className={styles.iconStyle} width="30" height="30" />
        </>
      </Link>
      <Link href="https://github.com/GregorCode" target="_blank" rel="noopener noreferrer">
        <>
          <Image src="/images/github.png" alt="githubIcon" className={styles.iconStyle} width="30" height="30" />
        </>
      </Link>
      <Link href="https://www.linkedin.com/in/gregorys-gonz%C3%A1lez-41506b198/" target="_blank" rel="noopener noreferrer">
        <>
          <Image src="/images/linkedin.png" alt="linkedIN" className={styles.iconStyle} width="30" height="30" />
        </>
      </Link>
      <Link href="mailto:gregorysgonzalez@gmail.com?subject=Contacto%20desde%20Blog">
        <>
          <Image src="/images/email.png" alt="email" className={styles.iconStyle} width="30" height="30" />
        </>
      </Link>
    </div>
  );
}
