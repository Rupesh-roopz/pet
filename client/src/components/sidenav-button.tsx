import React from 'react';
// import { makeStyles } from '@material-ui/styles';
// import { borderColor } from '@mui/system';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
// 	root : {
// 		backgroundColor : 'yellow',
// 		height : '4rem',	
// 		borderStyle : 'outset',
// 		// borderColor : 'pink',
// 		cursor : 'pointer',
// 		display : 'flex',
// 		justifyContent : 'center',
// 		alignItems : 'center',
// 		// borderRadius : '15px'
// 	},
// 	text : {
// 		fontSize : '1.3rem',
// 		fontFamily : 'Roboto'
// 	}
// });
const SideNavButton = (props: any) => {
	// const classes = useStyles();

	return <Typography
		align = 'center' 
		gutterBottom
		variant = 'button'
		sx={{ fontSize : '1.2rem' }}
		onClick={props.onClick}
	>{props.item}</Typography>;
};

export default SideNavButton;