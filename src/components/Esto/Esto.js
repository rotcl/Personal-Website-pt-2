import React from 'react'
import { Link } from 'gatsby'
import styles from './Esto.module.scss'

const Esto = () => {
    return <div className={styles.column}>
        <p>EN CONSTRUCCIÓN</p>
        <p>
        Pero la princesa está en otro&nbsp;
        <span>
        <Link to="/">castillo 🏰</Link>
        </span>{' '}
    </p>
    </div>
  }
  
  export default Esto
  