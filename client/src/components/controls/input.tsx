import { TextField } from '@material-ui/core';
import React from 'react';

type InputProps = {
	id:string,
	label : string,
	value : string,
	onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
	const { id, label, value, onChange } = props;

	return (
		<TextField 
			variant="outlined"
			label={label}
			id={id}
			value={value}
			onChange={onChange}
			margin='normal'
			fullWidth
			required
		/>
	);
};

export default Input;