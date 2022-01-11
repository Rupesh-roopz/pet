import SignUp from '../components/signup';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
	root : {
		minHeight : '90vh'
	},
	header : {
		minHeight : '5vh'
	}
});
export const Register = () => {
	const classes = useStyles();

	return (
		<div style={{ boxSizing : 'border-box' }}>
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow : 1 }}>
            Personal Expense Tracker
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				// className={classes.root}
			>
				<Grid item xs={6}>
					<SignUp />
				</Grid>   
			</Grid>
		</div>
		
	);
};	