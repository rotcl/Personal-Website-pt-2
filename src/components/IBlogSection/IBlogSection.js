import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HighlightBGYellow } from '@components/Highlight'
import BlogItem from './components/BlogItem'
import styles from './IBlogSection.module.scss'

const IBlogSection = ({ blogItems }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>A veces también escribo...</h1>
    <p className={styles.intro}>
      Tengo un blog personal, pero este está destinado <HighlightBGYellow>solo para temas informáticos / programación</HighlightBGYellow>.
    </p>
    <div className={styles.showcaseContainer}>
      {blogItems.map(({ node }) => (
        <BlogItem
          title={node.frontmatter.title}
          desc={node.frontmatter.description}
          link={node.fields.slug}
          date={node.frontmatter.date}
          key={node.id}
        />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

IBlogSection.propTypes = {
  blogItems: PropTypes.array,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                description
                date(formatString: "MMMM D, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <IBlogSection blogItems={data.allMarkdownRemark.edges} />}
  />
)
