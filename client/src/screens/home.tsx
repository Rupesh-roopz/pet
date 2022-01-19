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
import { Outlet } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const drawerWidth = 300;



  
const Home = () => {

	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />	
			</Grid>	
			<Grid item xs={2}>
				<SideNav />
			</Grid>	
			<Grid item xs={10}>
				<Main />
			</Grid>			
		</Grid>
	);
};

export default Home;