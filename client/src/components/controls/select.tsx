import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';
import React from 'react';

type SelectProps = {
    id: string; 
    label: string; 
    value: string; 
    onChange: (e: any) => void
    options: { 
        id: string; 
        title: string; 
    }[];

}
const Select = (props : SelectProps) => {
	const { id, label, value, onChange, options } = props;

	return (
		<FormControl variant="outlined" fullWidth required>
			<InputLabel>{label}</InputLabel>
			<MuiSelect
				label={label}
				id={id}
				value={value}
				onChange={onChange}
			>
				<MenuItem value=''>None</MenuItem>
				{
					options.map(
						item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
					)
				}
			</MuiSelect>
		</FormControl>
	);
};

export default Select;