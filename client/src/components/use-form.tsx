import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

type useFormProps = {
	firstName ?: string | undefined;
    lastName ?: string;
    dateOfBirth ?: null;
    profession ?: string;
    gender ?: string;
    phoneNumber ?: string;
    email: string;
    password: string;
    reEnterPassword ?: string;
    isAdmin ?: boolean | undefined;

}

const useForm = (initialValues: useFormProps) => {

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e: any)=> {
		console.log(e);
		const { id, value } = e.target;
		setValues({
			...values,
			[id] : value
		});
	};
	return {
		values,
		setValues,
		handleInputChange
	};
};

const useStyles = makeStyles(theme => ({
	root : {
		'& .MuiFormControl-root' : {
			width : '80%',
			margin : theme.spacing(1),

		},
		// '& .MuiFormLabel-root ' : {
		// 	fontSize : '22px' 
		// },
		'& .MuiInputBase-input ' : {
			fontSize : '22px' 
		}
		
		
	}
}));

const Form = (props: any) => {

	const classes = useStyles();
	const { children, ...other } = props;
	return (
		<form className={classes.root} autoComplete="off" {...other}>
			{props.children}
		</form>
	);
};


export  { useForm, Form };