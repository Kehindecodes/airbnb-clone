import React, { useRef, useState, useEffect, useContext } from 'react';
import {
	makeStyles,
	withStyles,
	createMuiTheme,
	fade,
} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Locations from './Locations';
import SetNumberOfGuest from './SetNumberOfGuest';
import RoomsContext from '../context/roomsContext';
import FilterButton from './FilterButton';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#333',
		},
	},
});

// const Overlay = () =>{
//     const classes = useStyles();

//     return(
//
//     )
//   }

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
	const roomsContext = useContext(RoomsContext);
	const { getData, data } = roomsContext;

	const [isFocus, setIsFocus] = useState(false);
	const [isFocusGuest, setIsFocusGuest] = useState(false);

	// const [numberOfGuest, setNumberOfGuest] = useState(0);

	// console.log(handleCount);
	// console.log(handleCount2);
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

	// let total = count + count2;
	// const getTotal = () => {
	// 	setNumberOfGuest(total);
	// };

	// const total = () => {

	// 	setNumberOfGuest(totalCount);
	// 	console.log(totalCount);
	// };

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
										value={locationInput}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className={classes.guest_wrapper}>
								{/* <TextField id="guest-input" label="Guest" variant="filled"
                             defaultValue='' 
                             placeholder="Add Guest"
                               InputProps={{ classes, disableUnderline: true }} /> */}
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
									value={totalCount}
									onChange={handleChangeGuest}
								/>
							</div>
							<div className={classes.buttonWrapper}>
								{/* <Button
									variant='contained'
									type='submit'
									className={classes.button}
									startIcon={<SearchIcon />}
									onClick={onSearch}>
									Search
								</Button> */}
								<FilterButton />
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
	' @keyframes fadeInDownBig': {
		'0%': {
			opacity: 0,
			transform: 'translate3d(0, -2000px, 0)',
		},

		'100%': {
			opacity: 1,
			transform: 'translate3d(0, 0, 0)',
		},
	},
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

		//    '&::before':{
		//               content:"",
		//               backgroundColor: 'rgba(0, 0, 0, 0.9)',
		//               position:"absolute",
		//               left:0,
		//               top:"200px",
		//               height:"100vh",
		//               opacity:1,
		//               width:"100%",
		//               display:"block",
		//               visibility:"visible",
		//               transition:'all 0.3s',

		//     }
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 2000,
	},
	wrapper: {
		display: 'flex',
		width: '100%',
		boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
		border: '1px solid #F2F2F2',
		borderRadius: 16,
		// height:"60px",
		//   border:'1px solid #000',
		//   borderRadius: 16,
		//   boxShadow: `${fade(theme.palette.primary.main, 0.1)} 0 0 0 2px`,
		//   '.MuiFormLabel-root':{
		//     color:'#333 !important',
		//     fontWeight:600
		// },
	},
	form: {
		//   marginLeft:'3rem',
	},
	buttonWrapper: {},
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

// const StyledtextField = withStyles({
//     root:{
//         backgroundColor:"#ffffff"
//     },
//     input:{
//         border:'1px solid #78648',
//       '&::after':{
//           borderBottom:'none'
//       }
//     }

// })(TextField)
