import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/footer.module.scss';

export default function Footer() {
  const github = 'https://github.com/GregorCode';
  const linkedin = 'https://www.linkedin.com/in/gregorys-gonz%C3%A1lez-41506b198/';
  const mailto = 'mailto:gregorysgonzalez@gmail.com?subject=Contacto%20desde%20Blog';

  return (
    <div className={styles.footer}>
      <Link href="/about" passHref>
        <a>
          <Image src="/images/about.png" alt="about" width="30" height="30" />
        </a>
      </Link>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <Image src="/images/github.png" alt="githubIcon" width="30" height="30" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <Image src="/images/linkedin.png" alt="linkedIN" width="30" height="30" />
      </a>
      <a href={mailto}>
        <Image src="/images/email.png" alt="email" width="30" height="30" />
      </a>
    </div>
  );
}
