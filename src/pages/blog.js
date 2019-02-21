import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import IBlogSection from '@components/IBlogSection'

/* eslint-disable jsx-a11y/accessible-emoji */
const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <IBlogSection />
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default BlogPage
