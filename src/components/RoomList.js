import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import RoomsContext from '../context/roomsContext';

const RoomList = () => {
	const classes = useStyles();
	const roomsContext = useContext(RoomsContext);
	const { stays } = roomsContext;

	return (
		<Grid container spacing={2} className={classes.gridWrapper}>
			{React.Children.toArray(
				stays.map((room) => (
					<Grid item xs={12} md={6} lg={4}>
						<div className={classes.card}>
							<img src={room.photo} alt={room.title} className={classes.img} />
						</div>
						<div className={classes.prop}>
							<Typography className={classes.p}>
								<span className={room.superHost && classes.superhost}>
									{room.superHost === true ? 'Super Host' : ''}
								</span>
								{room.type}
								{room.beds !== null ? `.${room.beds}beds` : ''}
							</Typography>

							<div style={{ display: 'flex' }}>
								<StarIcon
									style={{
										color: ' #EB5757',
										marginRight: '0.3rem',
										width: '15.76px',
										height: '15.88px',
									}}
								/>
								<Typography
									style={{
										fontSize: '14px',
										fontWeight: 500,
										color: '#4f4f4f',
									}}>
									{room.rating}
								</Typography>
							</div>
						</div>
						<div className={classes.title}>
							<Typography component='h3' className={classes.h3}>
								{room.title}
							</Typography>
						</div>
					</Grid>
				)),
			)}
		</Grid>
	);
};
export default RoomList;

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
		'@media(max-width:767px)': {
			width: '100%',
		},
	},
	img: {
		width: '100%',
		borderRadius: '24px',
		height: '269px',
		'@media(max-width:767px)': {
			width: '100%',
		},
	},
	gridWrapper: {
		padding: ' 0 2rem',
		marginTop: '1rem',
	},
	prop: {
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '1rem',
		width: '365px',
		'@media(max-width:767px)': {
			width: '100%',
		},
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
	superhost: {
		fontSize: '12px',
		fontWeight: 700,
		border: '1px solid #4f4f4f',
		color: '#4f4f4f',
		borderRadius: '12px',
		marginRight: '1rem',
		padding: '0.3rem',
	},
});
