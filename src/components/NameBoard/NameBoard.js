import PropTypes from 'prop-types'
import React from 'react'
import { HighlightBGPrimary } from '@components/Highlight'
import SocialHandles from '@components/SocialHandles'
import styles from './NameBoard.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const NameBoard = ({ siteMetadata }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>{siteMetadata.fullName}</h1>
    <div className={styles.subWrapper}>
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Programador</HighlightBGPrimary>
      </div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Padre</HighlightBGPrimary>
      </div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Gamer</HighlightBGPrimary>
      </div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Guitarrista</HighlightBGPrimary>
      </div>
    </div>
    <SocialHandles siteMetadata={siteMetadata} />
    <div className={styles.separator} />
  </div>
)

NameBoard.propTypes = {
  siteMetadata: PropTypes.object,
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
    render={data => <NameBoard siteMetadata={data.site.siteMetadata} />}
  />
)
