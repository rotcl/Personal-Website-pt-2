import React from 'react'
import styles from './SocialHandles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWpforms,
  faGithub,
  faGitlab,
  faTwitter,
  faStackOverflow,
  faDev,
  faMedium,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialHandles = ({ siteMetadata }) => {
  return (
    <div className={styles.container}>
      <a
        href={siteMetadata.wpformsHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Curriculum"
      >
        <FontAwesomeIcon icon={faWpforms} />
      </a>
      <a
        href={siteMetadata.githubHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={siteMetadata.gitlabHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Gitlab"
      >
        <FontAwesomeIcon icon={faGitlab} />
      </a>
      <a
        href={siteMetadata.twitterHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={siteMetadata.stackOverflowHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl StackOverflow"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
      <a
        href={siteMetadata.devToHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Dev.to"
      >
        <FontAwesomeIcon icon={faDev} />
      </a>
      <a
        href={siteMetadata.mediumHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Medium"
      >
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a
        href={siteMetadata.linkedInHandle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rotcl Linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default SocialHandles
