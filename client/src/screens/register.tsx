import { Card, TextField, CardContent, Grid } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

// // import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { DatePicker } from '@material-ui/pickers';
import React, { useState } from 'react';
// // import SignUp from '../components/signup';

// const useStyles = makeStyles(theme => ({
// 	pageContent : {
// 		margin : theme.spacing(5),
// 		padding : theme.spacing(3)
// 	}
// }));
import { DatePicker } from '@material-ui/pickers';
import { width } from '@mui/system';

export const Register = () => {
	// const classes = useStyles();
	const [date, setDate] = useState(new Date());
	const [age, setAge] = React.useState('');
	const [checked, setChecked] = React.useState(true);

	const handleChangeCheckbox = (event: any) => {
		setChecked(event.target.checked);
	};
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};
	return (
		<div style={{ maxWidth : 450, padding : '20px 5px', margin : '0 auto' }}>
			<form>
				<Card>
					<CardContent>
						<Grid container>
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="first name" 
									variant="outlined"
									// style={{ width : '80%' }}
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="Last name" 
									variant="outlined"
									// style={{ width : '80%' }}
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField 
									id="outlined-basic" 
									label="Email" 
									variant="outlined"
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="Profession" 
									variant="outlined"
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="Phone" 
									variant="outlined"
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<DatePicker 
									value={date}
									onChange={()=> console.log(date)}	
									autoOk
									inputVariant='outlined'
									emptyLabel='DOB'
									openTo='year'
									// format='YYYY MM dd'
									disableFuture
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormControl fullWidth>
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
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="Password" 
									variant="outlined"
									// style={{ width : '80%' }}
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField 
									id="outlined-basic" 
									label="Confirm Password" 
									variant="outlined"
									// style={{ width : '80%' }}
									fullWidth
									margin = 'normal'
								/>
							</Grid>
							<Grid item xs={3}>
								<Checkbox
									checked={checked}
									onChange={handleChangeCheckbox}
									inputProps={{ 'aria-label' : 'controlled' }}
								/>
								<InputLabel id="demo-simple-select-helper-label">Admin</InputLabel>	
							</Grid>
					
					
						</Grid>	
					</CardContent>
				</Card>

			</form>
		</div>
		
	);
};