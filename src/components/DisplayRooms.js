import React, { useEffect, useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import RoomsContext from '../context/roomsContext';
import FilterMenu from './FilterMenu';
import FilterButton from './FilterButton';
import RoomList from './RoomList';
const DisplayRooms = ({ stays }) => {
	const classes = useStyles();
	// const roomsContext = useContext(RoomsContext);
	// const { getData, data } = roomsContext;

	// useEffect(() => {
	// 	getData();

	// 	// eslint-disable-next-line
	// }, []);

	return (
		<main className={classes.main}>
			<Container>
				<Box className={classes.headingWrapper}>
					<Typography
						variant='h1'
						style={{
							color: '#333',
							fontWeight: 700,
							fontSize: '24px',
							lineHeight: '29.26px',
						}}>
						Stays in Finland
					</Typography>
					<Typography
						style={{ color: '#4f4f4f', fontWeight: 500, fontSize: '14px' }}>
						12+ stays
					</Typography>
				</Box>
				{/* <Button
					variant='contained'
					type='submit'
					className={classes.button}
					startIcon={<SearchIcon />}
					onClick={onSearch}>
					Search
				</Button> */}
				{/* <FilterButton onSearch={onSearch} /> */}
				<RoomList stays={stays} />
			</Container>
		</main>
	);
};

export default DisplayRooms;

const useStyles = makeStyles({
	headingWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: ' 0 2rem',
	},
	main: {
		marginTop: '3rem',
	},
	card: {
		width: '365px',
		height: '269px',
		marginBottom: '1rem',
	},
	img: {
		width: '100%',
		borderRadius: '24px',
		height: '269px',
	},
	gridWrapper: {
		padding: ' 0 2rem',
		marginTop: '1rem',
	},
	prop: {
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '1rem',
	},
	p: {
		fontWeight: 500,
		fontSize: '14px !important',
		color: '#828282',
	},
	title: {
		marginTop: '1rem',
		marginBottom: '2rem',
	},
	h3: {
		fontWeight: 600,
		fontSize: '16px',
		textAlign: 'left',
		color: '#333',
	},
});
