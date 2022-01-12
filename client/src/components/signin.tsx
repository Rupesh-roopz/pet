import { Card, TextField, CardContent, Grid, CardHeader, Typography } from '@material-ui/core';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from '../components/controls/select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from './controls/checkbox';
import React, { useState } from 'react';
import Button from './controls/buton';
import DatePicker  from './controls/date-picker';
import { useForm, Form } from './use-form';
import Input from './controls/input';
import Radio from './controls/radio';

const SignIn = () => {
	const initialValues = {
		email : '', 
		password : ''
		
	};
	const { values, handleInputChange } = useForm(initialValues);
	const handleSignIn = (e: any) => {
		e.preventDefault();
		console.log(values);
	};
	return (
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
					// align='center'
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
				<Form>
					<Grid container>
						<Grid item sm={12}>
							<Input 
								id = "email" 
								label = "Email"
								value = {values.email}
								onChange = {handleInputChange}
							/>
						</Grid>
						<Grid item sm={12}>
							<Input 
								id = "password" 
								label = "Password" 		
								value = {values.password}
								onChange = {handleInputChange}
							/>
						</Grid>
						
						<Grid container sm={12}
							direction="column"
							alignItems="center"
							justify="center"
						>
							<Grid item>
								<Button 
									size='large'
									color='primary'
									type="submit"
									text="Sign In"
									variant='contained'
									onClick={handleSignIn}
								/>
							</Grid>
						</Grid> 
					</Grid>
				</Form>
			</CardContent>
		</Card>
	);
};

export default SignIn;