import React from 'react'
import './Footer.css';
import People from './FooterPeople'
import Links from './FooterLinks'
import Docs from './FooterDocs'
//import Superiors from './footer-superiors'

function Footer() {
    return (
      <footer>
          <link href='https://fonts.googleapis.com/css?family=Space Grotesk' rel='stylesheet'></link>
        <div class="flex-parent">
          <div class="flex-child"><People /></div>
          <div class="flex-child"><Links /></div>
          <div class="flex-child"><Docs /></div>
        </div>
      </footer>
    )
  }
  
export default Footer

