import React from 'react';
import Layout from '@components/layout';
import Image from 'next/image';
import styles from '@styles/pages.module.scss';

export default function About() {
  return (
    <Layout>
      <div className={styles.marcoAbout}>
        <div className={styles.imageAbout}>
          <Image priority src="/images/profile.jpg" height={200} width={200} alt="imagen de perfil" />
        </div>
        <div>
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
