import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './header';
import AppBar from '@mui/material/AppBar';
import SideNavButton from './sidenav-button';
import { Navigate, useNavigate } from 'react-router-dom';
const drawerWidth = 300;

const SideNav = (props: any) => {
	const navigate = useNavigate();

	const sideNavItems = [
		{
			item : 'Manage Expense',
			onClick : () => navigate('/manage-expense')
		},{
			item : 'Track Expense',
			onClick : () => navigate('/track-expense')
		},{
			item : 'Profile',
			onClick : () => navigate('/profile')
		}
	];
	return (
		<Drawer
			sx={{
				width : drawerWidth,
				flexShrink : 0,
				'& .MuiDrawer-paper' : {
					width : drawerWidth,
					boxSizing : 'border-box',
					marginTop : '100px'
				},
			}}
			variant="persistent"
			anchor="left"
			open={props.open}
		>
			<Divider />
			<List>
				{sideNavItems.map(sideNav => (
					<ListItem button key={sideNav.item}>
						<ListItemText>
							<SideNavButton item = {sideNav.item} onClick={sideNav.onClick}/>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default SideNav;