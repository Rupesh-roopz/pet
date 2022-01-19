import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import handleState from '../utils/handle-state';
import DatePicker from './controls/date-picker';
import Input from './controls/input';
import Form from '../utils/form';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import Button from './controls/buton';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
	root : {
		minHeight : '90vh',
		alignContent : 'center',
		paddingTop : '100px'
		
	}
});

const Dashboard = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const [added, setAdded] = useState(false);
	const initialValues = {
		monthlyIncome : 0,
		monthStartingDate : null
	};

	const handleSignIn = (e: any) => {
		e.preventDefault();
		console.log(values);
	};
	const handleAddExpense = () => {
		navigate('/home/manage-expense');
	};

	const { values, handleInputChange } = handleState(initialValues);
	return (
		<>
			{
				added 
					? <Grid container direction='column' className={classes.root}>
						<Form>
							<Input
								id='monthlyIncome'
								label = " Monthly Income"
								value = {values.monthlyIncome!}
								onChange = {handleInputChange}
							/>	
							<DatePicker
								id="monthStartingDate"
								label="Month starting date"
								value={values.monthStartingDate!}
								onChange={date => handleInputChange({
									target : {
										id : 'monthStartingDate',
										value : date 
									} 
								})}
							/>
							<Grid container
								direction="column"
								alignItems="center"
								// justify="center"
							>
								<Grid item>
									<Button 
										size='large'
										color='primary'
										type="submit"
										text="Start"
										variant='contained'
										onClick={handleSignIn}
									/>
								</Grid>
							</Grid>
						</Form>
					</Grid>
					: 
					<Grid  container  columnSpacing={{ md : 5 }} justifyContent="space-evenly" sx={{ paddingTop : 4 }}>
						<Grid item sm={12} md={3}>
							<Card variant="outlined" sx={{ minWidth : 275, height : 300,borderRadius : 5,  }}>
								<CardHeader
									
									title="current month expense"
									subheader="September 14, 2016"
								/>
								<CardContent>
									<Typography variant='h2' align='center'>
								5000
									</Typography>
								</CardContent>
							</Card>						
						</Grid>
						<Grid item sm={12} md={3}>
							<Card variant="outlined" sx={{ minWidth : 275, height : 300,borderRadius : 5 }}>
								<CardHeader
									
									title="current month expense"
									subheader="September 14, 2016"
								/>
								<CardContent>
									<Typography variant='h2' align='center'>
								5000
									</Typography>
								</CardContent>
							</Card>						
						</Grid>
						<Grid item sm={12} md={3}>
							<Card variant="outlined" sx={{ minWidth : 275, height : 300,borderRadius : 5 }}>
								<CardHeader
									
									title="current month expense"
									subheader="September 14, 2016"
								/>
								<CardContent>
									<Typography variant='h2' align='center'>
								5000
									</Typography>
								</CardContent>
							</Card>						
						</Grid>
						<Grid container
							alignItems="center"
							justifyContent="flex-end"
							sx={{
								padding : 10
							}}
						>
							<Grid item>
								<Button 
									size='large'
									color='default'
									type="button"
									text="Add Expense"
									variant='contained'
									onClick={handleAddExpense}
								/>
							</Grid>
						</Grid>
						
					</Grid>
			}
		</>
		
	);
};

export default Dashboard;