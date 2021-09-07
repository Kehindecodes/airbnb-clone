import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CounterBtn from './CounterBtn';
import CounterBtn2 from './CounterBtn2';

const SetNumberOfGuest = ({ count, count2, handleCount, handleCount2 }) => {
	const classes = useStyles();
	// const [count, setCount] = useState(0);
	// const [count2, setCount2] = useState(0);
	// const handleCount = (value) => {
	// 	setCount(count + value);
	// 	console.log(count);
	// };
	// const handleCount2 = (value) => {
	// 	setCount2(count2 + value);
	// 	console.log(count2);
	// };

	return (
		<div className={classes.counterWrapper}>
			<div className={classes.adults}>
				<p className={classes.p}>
					Adults<span className={classes.age}>Ages 13 or above</span>
				</p>
				<div className={classes.counter}>
					<CounterBtn sign='-' updateCount={handleCount} />
					<p className={classes.num}>{count}</p>
					<CounterBtn sign='+' updateCount={handleCount} />
				</div>
			</div>
			<div className='children'>
				<p className={classes.p}>
					Children
					<span className={classes.age}>Ages 2-12</span>
				</p>
				<div className={classes.counter}>
					<CounterBtn2 sign2='-' updateCount2={handleCount2} />
					<p className={classes.num}>{count2}</p>
					<CounterBtn2 sign2='+' updateCount2={handleCount2} />
				</div>
			</div>
		</div>
	);
};

SetNumberOfGuest.propTypes = {
	count: PropTypes.number,
	count2: PropTypes.number,
	handleCount: PropTypes.any,
	handleCount2: PropTypes.any,
};

export default SetNumberOfGuest;
const useStyles = makeStyles(() => ({
	counterWrapper: {
		position: 'absolute',
		left: '24rem',
		marginTop: '3rem',
		width: '353px',
		'@media(max-width:767px)': {
			marginTop: '2rem',
			marginLeft: '2rem',
			width: '353px',
			left: 0,
		},
	},
	adults: {
		marginBottom: '2rem',
	},
	counter: {
		display: 'flex',
	},
	p: {
		color: '#333',
		fontWeight: 'bold',
		fontSize: '14px',
		marginBottom: '  0.5rem ',
	},
	age: {
		color: '#BDBDBD',
		display: 'block',
		fontWeight: 'normal',
	},
	num: {
		margin: 'auto 1rem',
		width: '20px',
	},
}));
