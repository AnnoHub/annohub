import React from 'react'

import './App.css';

import Navbar from "../components/Navbar/Navbar"
import Description from "../components/FeatureDescriptions/Description/Description";
import Footer from '../components/footer/footer';

function App() {
	return (
		<div>
			<Navbar />
			<Description />
			<Footer />
		</div>
	);
}

export default App
