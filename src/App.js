import react, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';
import RoomsState from './context/RoomsState';
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
		// setNumberOfGuest(count);
		// console.log(count2);
	};
	const handleClick = (e) => {
		setLocationInput(e.target.innerText);
	};
	const handleChange = (e) => {
		setLocationInput(e.target.value);
	};

	// useEffect(() => {
	// 	filteredRooms.length = 6;
	// }, []);

	const openFilterMenu = () => {
		setIsOpen(true);
		console.log('bro it is working ');
	};

	const closeFilterMenu = (e) => {
		setIsOpen(false);
	};

	// useEffect(() => {
	// 	document.addEventListener('click', closeFilterMenu);

	// 	// clean up
	// 	return () => {
	// 		document.removeEventListener('click', closeFilterMenu);
	// 	};
	// }, [ref]);
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
		}
	};
	return (
		<div>
			<Header clicks={openFilterMenu} />
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
