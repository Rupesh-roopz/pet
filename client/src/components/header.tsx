import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';

const Header = (props: any) => {
	const theme = useTheme();
	return (
		<AppBar 
			position="fixed" 
			sx={{ [theme.breakpoints.up('xs')] : {
				width : '100%',
				height : '100px'
			},
			zIndex : theme.zIndex.drawer  }}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={props.handleDrawerOpen}
					edge="start"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
            Personal Expense Tracker
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;