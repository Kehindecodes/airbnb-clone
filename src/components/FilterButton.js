import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
const FilterButton = ({ onSearch }) => {
	const classes = useStyles();
	return (
		<Button
			variant='contained'
			type='submit'
			className={classes.button}
			startIcon={<SearchIcon />}>
			Search
		</Button>
	);
};

export default FilterButton;
const useStyles = makeStyles(() => ({
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
}));
