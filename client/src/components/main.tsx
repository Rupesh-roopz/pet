import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';
  
const Main = (props: any) => {
	return (
		<Box sx={{ width : '100%',height : '90vh',background : 'linear-gradient(66deg, rgba(198,184,245,1) 20%, rgba(241,154,242,1) 42%, rgba(119,201,218,1) 100%)' }}> 
			<Outlet />
		</Box>);
};

export default Main;