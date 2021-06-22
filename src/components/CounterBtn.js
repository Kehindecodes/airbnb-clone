import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const CounterBtn = ({ sign, updateCount }) => {
	const classes = useStyles();
	const onclick = (e) => {
		e.preventDefault();
		sign === '+' ? updateCount(1) : updateCount(-1);
	};
	return (
		<button className={classes.btn} onClick={onclick}>
			{sign}
		</button>
	);
};

export default CounterBtn;
const useStyles = makeStyles(() => ({
	btn: {
		width: '23px',
		height: '23px',
		background: '#fff',
		border: '1px solid #828282',
		borderRadius: '4px',
	},
}));
