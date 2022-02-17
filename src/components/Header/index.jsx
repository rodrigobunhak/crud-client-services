import React from 'react'

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>CRUD Grupo Services</h1>
    </div>
  )
}

export default Header