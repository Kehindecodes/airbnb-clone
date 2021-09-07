import React from 'react';
import './App.css';
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';

import Footer from './components/Footer';
import RoomsState from './context/RoomsState';

function App() {
	return (
		<RoomsState>
			<div>
				<Header />
				<DisplayRooms />
				<Footer />
			</div>
		</RoomsState>
	);
}

export default App;
