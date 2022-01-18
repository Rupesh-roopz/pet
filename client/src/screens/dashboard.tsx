import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from '../components/header';
import SideNav from '../components/sidenav';
import Main from '../components/main';
import AppBar from '@mui/material/AppBar';
import ManageExpense from '../components/manage-expense';
import TrackExpense from '../components/track-expense';
import Profile from '../components/profile';
const drawerWidth = 300;



  
const Dashboard = () => {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		open ?
			setOpen(false) : setOpen(true);
	};

	return (
		<Box sx={{ display : 'flex', height : '100vh' }}>
			<CssBaseline />
			<Header handleDrawerOpen={handleDrawerOpen}/>
			<SideNav open={open}/>
			
			<Main open={open} />
				
		</Box>
	);
};

export default Dashboard;