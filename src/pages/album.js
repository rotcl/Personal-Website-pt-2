import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styles from '../components/Album/Album.module.scss'

import uno from '../assets/album-1.jpg'
import dos from '../assets/album-2.jpg'
import tres from '../assets/album-3.jpg'
import cuatro from '../assets/album-4.jpg'
import cinco from '../assets/album-5.jpg'
import seis from '../assets/album-6.jpg'
import siete from '../assets/album-7.jpg'
import ocho from '../assets/album-8.jpg'
import nueve from '../assets/album-9.jpg'
import diez from '../assets/album-10.jpg'
import once from '../assets/album-11.jpg'
import doce from '../assets/album-12.jpg'

/* eslint-disable jsx-a11y/accessible-emoji */
const AlbumPage = ({ glr }) => (
  <Layout>
    <SEO title="Fotografía" />
    <h1>Fotografía</h1>
    <div className={styles.row}>
      <div className={styles.column}>
      
        <img src = {uno} alt='bee'/>
      
        <img src = {cuatro} alt='santa isabel'/>
        
        
        <img src = {siete} alt='sons'/>
        
        
        <img src = {diez} alt='burgers beers and boards'/>
        
      </div>
      <div className={styles.column}>
      
        <img src = {dos} alt='mall sport'/>
        
        
        <img src = {ocho} alt='building'/>
        
        
        <img src = {cinco} alt='portugal'/>
        
        
        <img src = {once} alt='lider'/>
        
      </div>
      <div className={styles.column}>
      
        <img src = {tres} alt='tobalaba'/>
        
        
        <img src = {seis} alt='pedro de valdivia'/>
        
        <img src = {nueve} alt='las condes'/>
        
        
        
        <img src = {doce} alt='ufc'/>
        
      </div>
    </div>
  </Layout>
)

/* eslint-enable jsx-a11y/accessible-emoji */


export default AlbumPage