import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

/* eslint-disable jsx-a11y/accessible-emoji */
const AboutPage = () => (
  <Layout>
    <SEO
      title="Acerca de"
      keywords={[`developer`, `engineer`, `react`, `javascript`,`vue`, `web develpoment`, `pixel art`, `shopify`, `ecommerce`]}
    />
    <h1>Gabriel Andrés Vial Arqueros.</h1>

    <p>23 años 👋</p>
    <p>Padre de mellizos 👶</p>
    <p>Jugador CS:GO Amateur 🔫</p>
    <p>Músico de tiempo libre 🎸</p>
    <p>Me gusta sacar fotos con el celular, aunque no sé mucho sobre composición y fotografía 📸</p>
    <p>Estudio ingeniería informática porque me entretiene crear cosas nuevas, me gusta aprender de lo que hacen otras personas, y siempre agregarle un pequeño plus 💻</p>
    <p>
      Puedes contactarme&nbsp;
      <span>
        <a href={"mailto:gabriel.vial@irot.cl?Subject=Contacto IR"}>por aquí ✉️</a>
      </span>{' '}
      o puedes llamarme&nbsp;
      <span>
        <a href={"tel:+56932719940"}>por acá ☎️</a>
      </span>{' '}
    </p>
    <p>También puedes ver mi </p>
      <span>
        <a href={"/resume"}>Currículum Vitae acá 📋️</a>
      </span>{' '}
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default AboutPage
