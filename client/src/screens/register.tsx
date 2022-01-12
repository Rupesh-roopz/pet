import SignUp from '../components/signup';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import * as React from 'react';
import { padding } from '@mui/system';
import SignIn from '../components/signin';

const useStyles = makeStyles({
	root : {
		minHeight : '85vh',
		alignItems : 'center',
		// justifyContent : 'center',
		
	},
	header : {
		minHeight : '15vh'
	},
	bg : {
		background : 'linear-gradient(66deg, rgba(198,184,245,1) 20%, rgba(241,154,242,1) 42%, rgba(119,201,218,1) 100%)'
	}
});
export const Register = () => {
	const classes = useStyles();

	return (
		<div className={classes.bg}>
			<div className={classes.header}>
				<h4 style={{ 
					margin : '0',
					fontFamily : 'Dancing Script', 
					fontSize : '3.5rem', 
					paddingLeft : '7%', 
					paddingTop : '30px',
					fontWeight : 'bold',
					textShadow : '2px 2px #b5d4f7',
					color : '#bf0bb6'
				}}
				>
						Personal Expense Tracker
				</h4>
			</div>

			<Grid
				container
				spacing={0}
				direction="column"
				className={classes.root}	
			>
				<Grid item xs={7}>
					{/* <SignUp /> */}
					<SignIn />
				</Grid>   
			</Grid>
		</div>
	);
};	