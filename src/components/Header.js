import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import SearchBtn from './SearchBtn';
import FilterMenu from './FilterMenu';
import Collapse from '@material-ui/core/Collapse';
import Zoom from '@material-ui/core/Zoom';

const Header = ({ clicks }) => {
	const classes = useStyles();

	return (
		<AppBar className={classes.nav} position='static'>
			{/* { isOpen === true ? 
                <Overlay/>
              
              : '' } */}

			<Container maxWidth='lg'>
				<Toolbar className={classes.navWrapper}>
					<div>
						<img src={logo} alt='logo' />
					</div>
					<SearchBtn click={clicks} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;

const useStyles = makeStyles({
	nav: {
		background: 'transparent',
		padding: ' 1.5rem 2rem',
		boxShadow: 'none',
	},
	navWrapper: {
		justifyContent: 'space-between',
	},
});
