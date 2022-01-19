import React from 'react';
import { Button as MuiButton, makeStyles, Typography } from '@material-ui/core';

type ButtonProp = {
	size: 'small' | 'large' | 'medium';
	color: 'primary' | 'secondary' | 'default'; 
	type: 'button' | 'reset' | 'submit' ; 
	text: string; 
	variant : 'outlined' | 'text' | 'contained', 
	onClick:  React.MouseEventHandler<HTMLButtonElement>

}
const useStyles = makeStyles({
	root : {
		'& .MuiButton-containedSizeLarge' : {
			fontSize : '35px' 
		}
	},
	label : {
		textTransform : 'none'
	}
});

const Button = (props: ButtonProp) => {
	const { text, size, color, variant, onClick, ...other } = props;
	const classes = useStyles();
	return (
		<MuiButton
			variant={variant || 'contained'}
			size={size || 'large'}
			color={color || 'primary'}
			onClick={onClick}
			fullWidth
			className={classes.root}
			{...other}

			// classes={{ root : classes.root, label : classes.label }}
		>
			<Typography variant='button' gutterBottom>
				{text}
			</Typography>
		</MuiButton>
	);
};

export default Button;