import { Grid, TextField } from '@material-ui/core';

const SignUp = () => {
	return (
		<Grid 
			container 
			justifyContent="center"
		>
			<Grid item xs={10} sm={4}>
				<TextField 
					id="outlined-basic" 
					label="First name" 
					variant="outlined" 
					style={{ width : '80%' }}
					margin = 'normal'
				/>
			</Grid>
			<Grid  item xs={10} sm={4}>
				<TextField 
					id="outlined-basic" 
					label="Last name" 
					variant="outlined"
					style={{ width : '80%' }}
					margin = 'normal'
				/>
			</Grid>	
			<Grid  item xs={10} md={12}>
				<TextField 
					id="outlined-basic" 
					label="Email" 
					variant="outlined"
					style={{ width : '80%' }}
					margin = 'normal'	
				/>
			</Grid>	
			<Grid  item xs={10} sm={4}>
				<TextField 
					id="outlined-basic" 
					label="Phone" 
					variant="outlined"
					style={{ width : '80%' }}
					margin = 'normal'	
				/>
			</Grid>	
		</Grid>
	);
};

export default SignUp;