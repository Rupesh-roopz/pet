/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import Form from '../utils/form';
import handleState from '../utils/handle-state';
import Input from './controls/input';
import Radio from './controls/radio';
// import { makeStyles } from '@material-ui/styles';


// const useStyles = makeStyles(theme => ({
// 	root : {
// 		'& .MuiCard-root' : {
// 			width : '20%'
// 		}
// 	}
// }));
const SignUp = () => {
	// const classes = useStyles();

	const initialValues = {
		firstName : '',
		lastName : '',
		dateOfBirth : null,
		profession : '',
		gender : '',
		phoneNumber : '',
		email : '', 
		password : '',									
		reEnterPassword : '',
		isAdmin : false
		
	};

	const genderItems = [
		{ id : 'male', title : 'Male' },
		{ id : 'female', title : 'Female' },
		
	];
	const { values, handleInputChange } = handleState(initialValues);
	console.log(values);

	const handleSignUp = (e: any) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		
		<Form>
			<Grid container>
				<Grid item sm={12} md={6}>
					<Input 
						id = "firstName" 
						label = "First name"
						value = {values.firstName!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Input 
						id = "lastName" 
						label = "Last name" 		
						value = {values.lastName!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input 
						id = "email" 
						label = "Email" 		
						value = {values.email}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Input 
						id = "profession" 
						label = "Profession"
						value = {values.profession!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Input 
						id = "phoneNumber" 
						label = "Phone number" 		
						value = {values.phoneNumber!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<DatePicker
						id="dateOfBirth"
						label="Date of Birth"
						value={values.dateOfBirth!}
						onChange={date => handleInputChange({ target : { id : 'dateOfBirth', value : date } })}
					/>
				</Grid>	
				<Grid item sm={12} md={6}>
					<Select
						id="gender"
						label="Gender"
						value={values.gender!}
						onChange={(e) => handleInputChange({ target : { id : 'gender', value : e.target.value } })}
						options={genderItems}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Input 
						id = "password" 
						label = "Password"
						value = {values.password!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Input 
						id = "reEnterPassword" 
						label = "Confirm password" 		
						value = {values.reEnterPassword!}
						onChange = {handleInputChange}
					/>
				</Grid>
				<Grid  item sm={12} md={6} >
					<Checkbox
						id="isAdmin"
						label="Admin"
						value={values.isAdmin!}
						onChange={(e) => handleInputChange({ target : { id : 'isAdmin', value : e.target.checked } })}
					/>
				</Grid>
				<Grid container
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Grid item>
						<Button 
							size='large'
							color='primary'
							type="submit"
							text="Sign up"
							variant='contained'
							onClick={handleSignUp}
						/>
					</Grid>
				</Grid> 
			</Grid>
		</Form>
			
	);
};

export default SignUp;