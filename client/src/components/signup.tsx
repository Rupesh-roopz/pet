import { Card, TextField, CardContent, Grid, CardHeader } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import  DatePicker  from './controls/date-picker';
import useForm from './use-form';
import Input from './controls/input';

const SignUp = () => {
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
		isAdmin : ''
		
	};

	const { values, handleInputChange } = useForm(initialValues);

	return (
		<form>
			<Card>	
				<CardHeader	
					title="Sign Up"
				/>
				<Grid container >
					<Grid item sm={12} md={6}>
						<Input 
							id = "firstName" 
							label = "First name"
							value = {values.firstName}
							onChange = {handleInputChange}
						/>
					</Grid>
					<Grid item sm={12} md={6}>
						<Input 
							id = "lastName" 
							label = "Last name" 		
							value = {values.lastName}
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
							value = {values.profession}
							onChange = {handleInputChange}
						/>
					</Grid>
					<Grid item sm={12} md={6}>
						<Input 
							id = "phoneNumber" 
							label = "Phone number" 		
							value = {values.phoneNumber}
							onChange = {handleInputChange}
						/>
					</Grid>
					<Grid item sm={12} md={6}>
						<DatePicker
							id="dateOfBirth"
							label="Date of Birth"
							value={values.dateOfBirth}
							onChange={date => handleInputChange({ id : 'dateOfBirth', target : date })}
						/>
					</Grid>
					
					
				</Grid>
				<CardContent>
					{/*
						</Grid>
						<Grid item sm={12} md={6}>
							<DatePicker 
								value={date}
								onChange={()=> console.log(date)}	
								autoOk
								inputVariant='outlined'
								emptyLabel='DOB'
								openTo='year'
								disableFuture
								margin = 'normal'
								fullWidth
							/>
						</Grid>
						<Grid item sm={12} md={6}>
							<FormControl margin = 'normal' fullWidth>
								<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={age}
									label="Gender"
									onChange={handleChange}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value='male'>Male</MenuItem>
									<MenuItem value='female'>Female</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item sm={12} md={6}>
							<TextField 
								id="outlined-basic" 
								label="Password" 
								variant="outlined"
								fullWidth
								margin = 'normal'
							/>
						</Grid>
						<Grid item sm={12} md={6}>
							<TextField 
								id="outlined-basic" 
								label="Confirm Password" 
								variant="outlined"
								fullWidth
								margin = 'normal'
							/>
						</Grid>
						<Grid item sm={12}>
							<Checkbox
								checked={checked}
								onChange={handleChangeCheckbox}
								inputProps={{ 'aria-label' : 'controlled' }}
							/>
							<InputLabel id="demo-simple-select-helper-label">Admin</InputLabel>	
						</Grid>
						<Grid container sm={12}
							direction="column"
							alignItems="center"
							justify="center"
						>
							<Grid item>
								<Button 
									variant="contained"
									fullWidth
								>
							Sign up
								</Button>
							</Grid>

						</Grid>
					</Grid>	 */}
				</CardContent>
			</Card>
		</form>
	);
};

export default SignUp;