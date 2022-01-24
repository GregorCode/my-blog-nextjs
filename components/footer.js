import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/about">
        <a>
          <img
            src="/images/about.png"
            alt="about"
            className={styles.iconStyle}
          />
        </a>
      </Link>
      <a
        href="https://github.com/GregorCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/github.png"
          alt="githubIcon"
          className={styles.iconStyle}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/gregorys-gonz%C3%A1lez-41506b198/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/linkedin.png"
          alt="linkedIN"
          className={styles.iconStyle}
        />
      </a>
      <a href="mailto:gregorysgonzalez@gmail.com?subject=Contacto%20desde%20Blog">
        <img src="/images/email.png" alt="email" className={styles.iconStyle} />
      </a>
    </div>
  );
}
