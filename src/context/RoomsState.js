import React, { useState } from 'react';
import { rooms } from '../stays.json';
import RoomsContext from './roomsContext';
const RoomsState = (props) => {
	const [stays, setStays] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [locationInput, setLocationInput] = useState('');
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const totalCount = count + count2;

	// display rooms
	const showRooms = () => {
		return setStays(rooms);
	};
	// show the filter menu
	const openFilterMenu = () => {
		setIsOpen(true);
	
	};

	// hide filter menu
	const closeFilterMenu = (e) => {
		setIsOpen(false);
	};
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
	const onSearch = (e) => {
		e.preventDefault();
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
		<RoomsContext.Provider
			value={{
				stays,
				isOpen,
				openFilterMenu,
				closeFilterMenu,
				showRooms,
				locationInput,
				count,
				count2,
				totalCount,
				handleClick,
				handleCount,
				handleCount2,
				handleChange,
				onSearch,
			}}>
			{props.children}
		</RoomsContext.Provider>
	);
};

export default RoomsState;
