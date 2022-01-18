/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { styled } from '@mui/material/styles';

const drawerWidth = 300;
const Mains = styled('main', { shouldForwardProp : (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
  	flexGrow : 1,
  	padding : theme.spacing(3),
  	transition : theme.transitions.create('margin', {
  		easing : theme.transitions.easing.sharp,
  		duration : theme.transitions.duration.leavingScreen,
  	}),
  	marginLeft : `-${drawerWidth}px`,
  	...(open && {
  		transition : theme.transitions.create('margin', {
  			easing : theme.transitions.easing.easeOut,
  			duration : theme.transitions.duration.enteringScreen,
  		}),
  		marginLeft : 0,
  	}),
  }));
  
const Main = (props: any) => {
	return <Mains open={props.open} sx={{ marginTop : '100px', backgroundColor : 'lightskyblue' }}>
        hello     
	</Mains>;
};

export default Main;