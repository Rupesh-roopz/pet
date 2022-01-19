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
import { ListItemButton } from '@mui/material';
import { Box } from '@material-ui/core';
import DraftsIcon from '@mui/icons-material/Drafts';

const drawerWidth = 300;

const SideNav = (props: any) => {
	const navigate = useNavigate();

	const sideNavItems = [
		{
			item : 'Dashboard',
			onClick : () => navigate('/home')
		},
		{
			item : 'Manage Expense',
			onClick : () => navigate('/home/manage-expense')
		},{
			item : 'Track Expense',
			onClick : () => navigate('/home/track-expense')
		},{
			item : 'Profile',
			onClick : () => navigate('/home/profile')
		}
	];
	return (
		<Box sx={{ width : '100%',height : '90vh', bgcolor : 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<List>
					{sideNavItems.map(sideNav => (
						<ListItem key={sideNav.item} onClick={sideNav.onClick}>
							<ListItemButton>
								<ListItemText>
									<SideNavButton item = {sideNav.item} />
								</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</nav>
		</Box>
	);
};

export default SideNav;