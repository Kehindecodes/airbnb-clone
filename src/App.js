import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';
import { rooms } from '././stays.json';
import FilterMenu from './components/FilterMenu';
import Footer from './components/Footer';

function App() {
	const [stays, setStays] = useState(rooms);

	const [isOpen, setIsOpen] = useState(false);
	const [locationInput, setLocationInput] = useState('');
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const totalCount = count + count2;
	const handleCount = (value) => {
		setCount(count + value);
	};
	const handleCount2 = (value) => {
		setCount2(count2 + value);
	};
	const handleClick = (e) => {
		setLocationInput(e.target.innerText);
	};
	const handleChange = (e) => {
		setLocationInput(e.target.value);
	};
	const openFilterMenu = () => {
		setIsOpen(true);
		console.log('bro it is working ');
	};

	const closeFilterMenu = (e) => {
		setIsOpen(false);
	};

	console.log(rooms);
	const onSearch = (e) => {
		e.preventDefault();
		console.log(totalCount);
		// const filterd = filteredRooms.filter((d) => d.maxGuests === 9);
		const filteredData = rooms.filter(
			(room) => room.maxGuests === totalCount || room.city === locationInput,
		);

		console.log(filteredData);

		if (locationInput === '' && totalCount === 0) {
			setStays(stays);
		} else {
			setStays(filteredData);
			closeFilterMenu();
		}
	};
	return (
		<div>
			<Header
				clicks={openFilterMenu}
				locationInput={locationInput}
				totalCount={totalCount}
			/>
			{isOpen === true ? (
				<FilterMenu
					onSearch={onSearch}
					totalCount={totalCount}
					count={count}
					count2={count2}
					locationInput={locationInput}
					handleCount={handleCount}
					handleCount2={handleCount2}
					handleChange={handleChange}
					handleClick={handleClick}
					close={closeFilterMenu}
				/>
			) : (
				''
			)}
			<DisplayRooms stays={stays} onClick={closeFilterMenu} />
			<Footer />
		</div>
	);
}

export default App;
