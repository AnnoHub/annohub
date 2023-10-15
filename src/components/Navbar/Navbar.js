import React from 'react'

import './Navbar.css';

import Logo from "./Logo"

function Navbar() {
	return (
		<div className='navbar-div'>
			<div className='logo-outer'>
				<Logo scale="0.75" width="155%" height="118%" />
			</div>
			<div className='navigator-outer'>
				<div className='navigator'>Contact Us</div>
				<div className='navigator'>People</div>
				<div className='navigator'>Docs</div>	
			</div>
		</div>
	)
}

export default Navbar