import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Frontend Dev"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard />
    
  </Layout>
)

export default IndexPage
