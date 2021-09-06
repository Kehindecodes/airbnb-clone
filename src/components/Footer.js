import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<p>
				created by{' '}
				<a className={classes.a} href='https://github.com/Kehindecodes'>
					<span style={{ fontWeight: 600 }}>Oki kehinde</span>
				</a>
				-{' '}
				<a className={classes.a} href='devChallenges.io'>
					devChallenges.io
				</a>
			</p>
		</footer>
	);
};

const useStyles = makeStyles({
	footer: {
		color: '#828282',
		fontSize: '14px',
		padding: '2rem',
		textAlign: 'center',
		marginTop: '1rem',
	},
	a: {
		color: '#828282',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
});

export default Footer;
