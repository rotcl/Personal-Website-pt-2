import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="IR"
      keywords={[`developer`, `engineer`, `react`, `javascript`,`vue`, `web develpoment`, `pixel art`, `shopify`, `ecommerce`]}
    />
    <NameBoard />
    
  </Layout>
)

export default IndexPage
