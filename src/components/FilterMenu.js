import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Locations from './Locations';
import SetNumberOfGuest from './SetNumberOfGuest';
// import RoomsContext from '../context/roomsContext';
import FilterButton from './FilterButton';

const FilterMenu = ({
	onSearch,
	totalCount,
	count,
	count2,
	locationInput,
	handleCount,
	handleCount2,
	handleChange,
	handleClick,
	close,
}) => {
	const classes = useStyles();
	// const searchInput = useRef(null)
	// const roomsContext = useContext(RoomsContext);
	// // const { getData, data } = roomsContext;

	const [isFocus, setIsFocus] = useState(false);
	const [isFocusGuest, setIsFocusGuest] = useState(false);

	const onFocus = (e) => {
		setIsFocus(true);
		setIsFocusGuest(false);
	};
	const onFocusGuest = (e) => {
		setIsFocusGuest(true);
		setIsFocus(false);
	};

	const onBlur = () => {
		setIsFocusGuest(false);
	};
	const onBlurGuest = () => {
		setIsFocus(false);
	};

	const handleChangeGuest = (e) => {};

	return (
		<div
			className={classes.overlay}
			onClick={() => {
				close();
			}}>
			<div
				className={classes.filterWrapper}
				onClick={(e) => e.stopPropagation()}>
				<Box>
					<form className={classes.form} onSubmit={onSearch}>
						<div className={classes.wrapper}>
							<div className='locationWrapper'>
								<div className={classes.inner_div}>
									<label htmlFor='location' className={classes.label}>
										Location
									</label>
									<input
										type='text'
										name='location'
										id='location'
										placeholder='Add location'
										className={classes.input}
										onFocus={onFocus}
										onBlur={onBlur}
										value={locationInput && `${locationInput}, Finland`}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className={classes.guest_wrapper}>
								<label htmlFor='guest' className={classes.label}>
									Guest
								</label>
								<input
									type='text'
									name='guest'
									id='guest'
									placeholder='Add Guest'
									className={classes.input}
									onFocus={onFocusGuest}
									onBlur={onBlurGuest}
									value={totalCount === 0 ? '' : `${totalCount} guests`}
									onChange={handleChangeGuest}
								/>
							</div>
							<div className={classes.buttonWrapper}>
								<FilterButton onclick={onSearch} />
							</div>
						</div>
					</form>
					{isFocus === true ? <Locations onclick={handleClick} /> : ''}
				</Box>
				<div className={classes.resultWrapper}>
					{isFocusGuest === true ? (
						<SetNumberOfGuest
							count={count}
							count2={count2}
							handleCount={handleCount}
							handleCount2={handleCount2}
						/>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default FilterMenu;

const useStyles = makeStyles((theme) => ({
	filterWrapper: {
		position: 'absolute',
		display: 'block',
		top: 0,
		left: 0,
		width: '100%',
		color: '#333',
		height: '70vh',
		background: '#fff',
		zIndex: 3000,
		padding: '5rem',
		animation: 'fadeInDownBig',

		'@media(max-width:767px)': {
			height: '600px',
			padding: '5rem 0.5rem',
		},
	},
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100vw',
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 2000,
		'@media(max-width:767px)': {
			height: '100vh',
		},
	},
	wrapper: {
		display: 'flex',
		width: '100%',
		boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
		border: '1px solid #F2F2F2',
		borderRadius: 16,

		'@media(max-width:767px)': {
			display: 'block',
		},
	},
	form: {
		//   marginLeft:'3rem',
	},
	buttonWrapper: {
		'@media(max-width:767px)': {
			position: 'absolute',
			bottom: '1rem',
			textAlign: 'center',
		},
	},
	inner_div: {
		border: 'none',
		position: 'relative',
		width: '353px',

		//  height:'40px',
		padding: '7px 16px ',

		'&:hover': {
			border: '1px solid #333',
			borderRadius: 16,
		},
		'@media(max-width:767px)': {
			width: '100%',
		},
	},
	guest_wrapper: {
		border: '1px solid #F2F2F2',
		position: 'relative',
		width: '353px',

		//  height:'40px',
		padding: '7px 16px ',

		'&:hover': {
			border: '1px solid #333',
			borderRadius: 16,
		},
		'@media(max-width:767px)': {
			width: '100%',
		},
	},
	button_wrapper: {
		border: '1px solid #F2F2F2',
		position: 'relative',
		width: '353px',
		boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
		//  height:'40px',
		padding: '7px 16px ',

		'&:hover': {
			border: '1px solid #333',
			borderRadius: 16,
		},
	},
	button: {
		marginRight: '9rem',
		marginLeft: '10rem',
		marginTop: '0.5rem',
		width: 126,
		borderRadius: 16,
		textTransform: 'capitalize',
		background: 'rgba(235, 87, 87, 0.9)',
		color: '#fff',
		'&:hover': {
			background: 'rgba(235, 87, 89, 0.9)',
		},
	},
	input: {
		border: 'none',
		outline: '0',
		display: 'block',
		'&::placeholder': {
			color: '#BDBDBD',
		},
	},
	label: {
		// position:'absolute',
		fontWeight: 800,
		textTransform: 'uppercase',
		color: '#333',
		// transform:'translate(16px, 0) scale(1)'
	},
	resultWrapper: {
		position: 'relative',
	},
}));
