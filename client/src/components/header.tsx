import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { Grid } from '@material-ui/core';

const Header = (props: any) => {
	const theme = useTheme();
	return (
		<Box   sx={{
			minHeight : '10vh',
			backgroundColor : 'primary.dark',
		}}>
			<Grid container>
				<Grid item>
					<Typography variant="h6" noWrap component="div">
				Personal Expense Tracker
					</Typography>
				</Grid>
			
			</Grid>
		</Box>
		

	);
};

export default Header;