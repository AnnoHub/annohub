import React from 'react'
import './footer.css';
import People from './footer-people'
//import Superiors from './footer-superiors'
import Links from './footer-links'
import Docs from './footer-docs'

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

