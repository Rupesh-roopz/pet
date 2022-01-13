import SignUp from './signup';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
// import * as React from 'react';
import { padding } from '@mui/system';
import SignIn from './signin';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
	root : {
		minHeight : '85vh',
		alignItems : 'center',
		// justifyContent : 'center',
		
	},
	header : {
		minHeight : '15vh',
		display : 'flex'
	},
	bg : {
		background : 'linear-gradient(66deg, rgba(198,184,245,1) 20%, rgba(241,154,242,1) 42%, rgba(119,201,218,1) 100%)'
	}
});

// type RegisterProps = {

// }

const Register = (props : any) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const handleRegisterDashboard = () => {
		props.dashboardpage === 'Sign in' 
			? navigate('/')
			: navigate('/signup');
	};

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
				<Grid item xs={6}>
					<Card
						raised
						style={{
							width : '100%', 
							border : '5px double #EFA9C4',
							borderRadius : '30px 0px 30px 0px'
						}}
					>
						<CardContent>
							<Typography
								gutterBottom 
								variant="h4" 
								component="div"
								style={{ 
									width : '100%',
									height : '60px',
									margin : '20px',
									color : '#bf0bb6',
									textShadow : '1px 1px #b5d4f7',
									fontWeight : '400',
								}}
							>
				Sign in
							</Typography>
							
							{props.signin}
							<p>{props.dashboardMessage}<a onClick={handleRegisterDashboard}><strong> {props.dashboardpage}</strong></a></p>
						</CardContent>
					</Card>
				</Grid>   
			</Grid>
		</div>
	);
};	

export default Register;