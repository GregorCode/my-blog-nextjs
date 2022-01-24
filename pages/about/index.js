import React from "react";
import Layout from "@components/layout";
import utilStyles from "@styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <section className={utilStyles.headingMd}>
          <p>
            Hola, soy <strong>Gregorys</strong>. Soy Ingeniero de Sistemas y
            Desarrollador de Software. En este blog iré publicando temas
            relacionados a la informática y todas las posibles soluciones a los
            problemas que se me presentan en mi trabajo.
          </p>
          <p>
            Actualmente estoy estudiando en la escuela de JavaScript, quiero
            ampliar mis conocimientos sobre React, Node y NextJS. Tambien he
            estudiado otras tecnologías como Docker, Kubernetes, AWS, entre
            otros.
          </p>
        </section>
        <p>
          <strong> Esperos que te guste mi blog :) </strong>
        </p>
      </section>
    </Layout>
  );
}
