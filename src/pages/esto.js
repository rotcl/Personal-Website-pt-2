import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import Esto from '@components/Esto'

const EstoPage = ({ data }) => (
  <Layout>
    <SEO
      title="Sorpresa"
      keywords={[`surprise`, `oops`]}
    />
    <Esto/>
    
  </Layout>
)

export default EstoPage
