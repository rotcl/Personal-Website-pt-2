import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'

const Header = ({ showHome }) => (
  <header className={styles.header}>
    <div className={styles.menu}>
      {showHome ? (
        <div className={styles.menuItem}>
          <Link to="/">Inicio</Link>
        </div>
      ) : null}
      <div className={styles.menuItem}>
        <Link to="/about/">Acerca de</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/portfolio/">Portafolio</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/album/">Fotografía</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/blog/">Blog</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteMetadata: PropTypes.object,
  showHome: PropTypes.bool,
}

export default Header
