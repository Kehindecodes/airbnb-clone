import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import RoomsContext from '../context/roomsContext';
const OpenFilter = () => {
	const classes = useStyles();
	const roomsContext = useContext(RoomsContext);
	const { openFilterMenu, locationInput, totalCount } = roomsContext;
	return (
		<Box className={classes.wrapper} onClick={openFilterMenu}>
			<form className={classes.form}>
				<div className={classes.location}>
					<input
						type='text'
						value={locationInput && `${locationInput}, Finland`}
						name='location'
						className={classes.input}
						placeholder='Add Location'
						onChange={(e) => e.target.value}
					/>
				</div>
				<div className={classes.guest}>
					<input
						type='text'
						value={totalCount === 0 ? '' : `${totalCount} guests`}
						name='guest'
						className={classes.input}
						placeholder='Add Guest'
						onChange={(e) => e.target.value}
					/>
				</div>
			</form>
			<Box className={classes.btnWrapper}>
				<Button className={classes.btn}>
					<SearchIcon
						style={{
							color: ' #EB5757',
							marginTop: '0.5rem',
							marginRight: '0.5rem',
						}}
					/>
				</Button>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		width: '297px',
		height: '55px',
		background: '#fff',
		boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
		borderRadius: '16px',
		cursor: 'pointer',
		'@media(max-width:767px)': {
			width: '100%',
		},
	},
	form: {
		display: 'flex',
		width: '244px',
	},
	location: {
		width: '138px',
		fontFamily: "'Mulish', sans-serif ",
		borderRight: ' 1px solid rgba(0, 0, 0, 0.1) !important',
		padding: '1rem',
		height: '100%',
	},
	guest: {
		borderRight: ' 1px solid rgba(0, 0, 0, 0.1) !important',
		width: '106px',
		height: '100%',
		padding: '1rem',
	},
	input: {
		height: '100%',
		width: '100%',
		border: 'none',
		outline: 'none',
		color: '#333',
		fontWeight: 400,
	},

	btnWrapper: {
		width: '55px',
	},
	btn: {
		width: '100%',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
});
export default OpenFilter;
