import React from 'react'

import './App.css';

import Navbar from "../components/Navbar/Navbar"
import DescriptionHeader from '../components/DescriptionHeader/DescriptionHeader';
import DataTypes from '../components/DataTypes/DataTypes';
import Description from "../components/FeatureDescriptions/Description/Description";
import Footer from '../components/Footer/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<DescriptionHeader />
			<DataTypes />
			<Description />
			<Footer />
		</div>
	);
}

export default App
