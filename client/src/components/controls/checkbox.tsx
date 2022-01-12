import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type CheckboxProps = {
    id : string,
    value : boolean,
    label : string,	
    onChange: (e: any) => void,
}

const useStyles = makeStyles({
	root : {
		'& .MuiSvgIcon-root' : {
			fontSize : '30px' 
		},
		
	},
	root1 : {
		'& .MuiTypography-body1' : {
			fontSize : '25px' 
		},
	}
	
});

const Checkbox = (props : CheckboxProps) => {
	const { id,value,onChange,label } = props;
	const classes = useStyles();
	return (
		<FormControl>
			<FormControlLabel
				control={<MuiCheckbox
					id={id}
					color="primary"
					checked={value}
					onChange={onChange}
					className ={classes.root}
					
				/>}
				label={label}
				className ={classes.root1}
			/>
		</FormControl>
	);
};

export default Checkbox;