import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const CounterBtn2 = ({ sign2, updateCount2 }) => {
	const classes = useStyles();
	const onclick = (e) => {
		e.preventDefault();
		sign2 === '+' ? updateCount2(1) : updateCount2(-1);
	};
	return (
		<button className={classes.btn} onClick={onclick}>
			{sign2}
		</button>
	);
};

export default CounterBtn2;
const useStyles = makeStyles(() => ({
	btn: {
		width: '23px',
		height: '23px',
		background: '#fff',
		border: '1px solid #828282',
		borderRadius: '4px',
	},
}));
