import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'


/* eslint-disable jsx-a11y/accessible-emoji */
const AlbumPage = ({ glr }) => (
  <Layout>
    <SEO title="Fotografía" />
    <h1>Fotografía</h1>
    <p>Lo siento Mario</p>
    <p>
      Pero la princesa está en otro&nbsp;
      <span>
        <Link to="/">castillo</Link>
      </span>{' '}
    </p>
  </Layout>
)

/* eslint-enable jsx-a11y/accessible-emoji */


export default AlbumPage