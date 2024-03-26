import React from 'react'

import './Navbar.css';

import Logo from "./Logo"

function Navbar() {
	return (
		<div className='navbar-div'>
			<Logo scale="0.75" width="450px" height="160px" />
			
			<div className='navigator-outer'>
				<div className='navigator'>Contact Us</div>
				<div className='navigator'>People</div>
				<div className='navigator'>Docs</div>	
			</div>
		</div>
	)
}

export default Navbar