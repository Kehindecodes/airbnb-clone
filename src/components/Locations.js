import React, { useContext } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import { rooms } from '../stays.json';

const Locations = ({ onclick }) => {
	const classes = useStyles();
	function getUniqueValues(array, property) {
		const propValues = array.map((element) => element[property]);
		const uniqueValues = new Set(propValues);
		const uniqueValuesArray = [...uniqueValues];
		return uniqueValuesArray;
	}
	const stays = getUniqueValues(rooms, 'city');

	return (
		<div className={classes.locationWrapper}>
			<ul className={classes.ui}>
				{React.Children.toArray(
					stays.map((location) => (
						<li className={classes.li}>
							<LocationOnIcon /> <p onClick={onclick}>{location}</p>
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
