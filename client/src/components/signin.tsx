import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Button from './controls/buton';
import Form from '../utils/form';
import handleState from '../utils/handle-state';
import Input from './controls/input';

const SignIn = () => {
	const initialValues = {
		email : '', 
		password : ''
		
	};
	const { values, handleInputChange } = handleState(initialValues);
    
	const handleSignIn = (e: any) => {
		e.preventDefault();
		console.log(values);
	};
	return (
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
			
	);
};

export default SignIn;