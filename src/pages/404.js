import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Lo siento Mario</p>
    <p>
      Pero la princesa está en otro&nbsp;
      <span>
        <Link to="/">castillo 🏰</Link>
      </span>{' '}
    </p>
  </Layout>
)

export default NotFoundPage
