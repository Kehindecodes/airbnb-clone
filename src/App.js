import react, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';
import RoomsState from './context/RoomsState';
import { rooms } from '././stays.json';
import FilterMenu from './components/FilterMenu';

function App() {
	const ref = useRef(null);
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
		if (ref.current && !ref.current.contains(e.target)) {
			e.preventDefault();
			setIsOpen(false);
			console.log('you just click the body');
		}
	};

	useEffect(() => {
		document.addEventListener('click', closeFilterMenu);

		// clean up
		return () => {
			document.removeEventListener('click', closeFilterMenu);
		};
	}, [ref]);

	const onSearch = (e) => {
		e.preventDefault();
		console.log(totalCount);
		// const filterd = filteredRooms.filter((d) => d.maxGuests === 9);
		const filteredData = rooms.filter(
			(room) => room.maxGuests === totalCount || room.city === locationInput,
		);
		console.log(filteredData);
		setStays(filteredData);
	};
	return (
		<>
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
				/>
			) : (
				''
			)}
			<DisplayRooms stays={stays} refs={ref} />
		</>
	);
}

export default App;
