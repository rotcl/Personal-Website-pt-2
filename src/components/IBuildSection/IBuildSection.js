import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HighlightBGYellow } from '@components/Highlight'
import ShowcaseItem from './components/ShowcaseItem'
import styles from './IBuildSection.module.scss'

const IBuildSection = ({ portfolioItems }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Portafolio</h1>
    <p className={styles.intro}>
      Trato de mantener mis proyectos y snippets al día en GitLab, <HighlightBGYellow>pero los destacados irán aquí</HighlightBGYellow>.
    </p>
    <div className={styles.showcaseContainer}>
      {portfolioItems.map(pi => (
        <ShowcaseItem {...pi} key={pi.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

IBuildSection.propTypes = {
  portfolioItems: PropTypes.array,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            fullName
            wpformsHandle
            twitterHandle
            gitlabHandle
            stackOverflowHandle
            devToHandle
            mediumHandle
            linkedInHandle
          }
        }
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                portfolioItems {
                  title
                  desc
                  link
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <IBuildSection
        portfolioItems={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.portfolioItems
        }
      />
    )}
  />
)
