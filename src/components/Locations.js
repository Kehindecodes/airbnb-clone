import React, { useContext } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import RoomsContext from '../context/roomsContext';

const Locations = () => {
	const classes = useStyles();
	const roomsContext = useContext(RoomsContext);
	const { stays, handleClick } = roomsContext;
	// do not display same locations more then once
	function getUniqueValues(array, property) {
		const propValues = array.map((element) => element[property]);
		const uniqueValues = new Set(propValues);
		const uniqueValuesArray = [...uniqueValues];
		return uniqueValuesArray;
	}
	const rooms = getUniqueValues(stays, 'city');

	return (
		<div className={classes.locationWrapper}>
			<ul className={classes.ui}>
				{React.Children.toArray(
					rooms.map((location) => (
						<li className={classes.li}>
							<LocationOnIcon /> <p onClick={handleClick}>{location}</p>
						</li>
					)),
				)}
			</ul>
		</div>
	);
};

export default Locations;

const useStyles = makeStyles(() => ({
	locationWrapper: {
		// padding:'2rem',
		position: 'absolute',
		color: ' #4F4F4F',
		marginTop: '2rem',
		marginLeft: '3rem',
		width: '353px',
		'@media(max-width:767px)': {
			marginLeft: '2rem',
		},
	},
	ui: {
		listStyle: 'none',
	},
	li: {
		marginBottom: '1.5rem',
		fontWeight: 400,
		cursor: 'pointer',
		display: 'flex',
		fontSize: '14px',
		p: {
			marginRight: '1rem',
		},
	},
}));
