import PropTypes from 'prop-types'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = ({ siteMetadata }) => (
  <footer className={styles.footer}>
    <div>
      <span>© Copyright 2019 </span>
      <a href={siteMetadata.gitlabHandle} className={styles.link} target="_blank">
        {siteMetadata.fullName}
      </a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Footer
