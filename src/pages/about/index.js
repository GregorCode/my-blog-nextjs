import React from 'react';
import Layout from '@components/layout';
import Image from 'next/image';
import styles from '@styles/about.module.scss';

export default function About() {
  return (
    <Layout>
      <div className={styles.card}>
        <Image src="/images/profile.jpg" alt="Gregor" height={250} width={1000} />
        <div className={styles.container}>
          <h2>Gregorys González</h2>
          <p className={styles.title}>Desarrollador de Software</p>
          <p>
            Hola, soy <strong>Gregorys</strong>. Soy Ingeniero de Sistemas y Desarrollador de Software. En este blog iré publicando temas relacionados a la informática y todas las posibles soluciones
            a los problemas que se me presentan en mi trabajo.
          </p>
          <p>
            Actualmente estoy estudiando en la escuela de JavaScript de Platzi, quiero ampliar mis conocimientos sobre ReactJS, NodeJS y NextJS. Tambien he estudiado otras tecnologías como Docker,
            Kubernetes, AWS, entre otros.
          </p>
          <p className={styles.sloganAbout}>
            <strong> Espero te guste mi blog :) </strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}
