import React from 'react';
import {
	makeStyles,
	withStyles,
	createMuiTheme,
	fade,
} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Slide from '@material-ui/core/Slide';
import zIndex from '@material-ui/core/styles/zIndex';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#333',
		},
	},
});
const FilterMenu = () => {
	const classes = useStyles();

	return (
		<div className={classes.filterWrapper}>
			<Box>
				<form className={classes.form}>
					<div className={classes.wrapper}>
						<div className={classes.inner_div}>
							{/* <TextField id="location-input" label="Location" variant="filled" placeholder="Add location" 
                              defaultValue='' 
                               InputProps={{ classes, disableUnderline: true }}
                             /> */}
							<label htmlFor='location' className={classes.label}>
								Location
							</label>
							<input
								type='text'
								name='location'
								id='location'
								placeholder='Add location'
								className={classes.input}
							/>
						</div>
						<div className={classes.guest_wrapper}>
							{/* <TextField id="guest-input" label="Guest" variant="filled"
                             defaultValue='' 
                             placeholder="Add Guest"
                               InputProps={{ classes, disableUnderline: true }} /> */}
							<label htmlFor='guest'  className={classes.label}>
								Guest
							</label>
							<input
								type='text'
								name='location'
								id='guest'
								placeholder='Add Guest'
								className={classes.input}
							/>
						</div>
						<div className={classes.buttonWrapper}>
							<Button
								variant='contained'
								className={classes.button}
								startIcon={<SearchIcon/>}>
								Search
							</Button>
						</div>
					</div>
				</form>
			</Box>
		</div>
	);
};

export default FilterMenu;

const useStyles = makeStyles((theme) => ({
	filterWrapper: {
		position: 'absolute',
		display: 'block',
		top: 0,
		left: 0,
		width: '100%',
		color: '#333',
		height: '70vh',
		background: '#fff',
		zIndex: 2000,
		padding: '5rem',
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
  button:{
    marginRight:'9rem',
    marginLeft:'10rem',
    marginTop:'0.5rem',
     width:126,
    borderRadius:16,
    textTransform:'capitalize',
    background: 'rgba(235, 87, 87, 0.9)',
    color:'#fff',
    '&:hover':{
      background: 'rgba(235, 87, 89, 0.9)'
    }
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
	// root:{
	//   border: '1px solid #e2e2e1',
	//   overflow: 'hidden',
	//   // borderRadius: 16,
	//   backgroundColor: '#fcfcfb',
	//   width:'350px',
	//   height:'40px',
	//   fontSize:'0.9rem',
	//   boxShadow: `${fade(theme.palette.primary.main, 0.1)} 0 0 0 1px`,

	//   transition: theme.transitions.create(['border-color', 'box-shadow']),
	//   '&:hover': {
	//     backgroundColor: '#fff',
	//   },
	//   '&$focused': {
	//     backgroundColor: '#fff',
	//     borderColor: '#000',

	//   },
	// },
	// focused:{},
	// label:{
	//   color:"#000 !important",
	//   fontWeight:500,
	// },
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
