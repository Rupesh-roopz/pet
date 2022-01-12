import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio as MuiRadio } from '@material-ui/core';
import React from 'react';

type RadioProps = {
     id: string; 
     label: string; 
     value: string; 
     onChange: (e: any) => void,
     options: { value: number; title: string; }[]
}

const Radio = (props : RadioProps) => {
	const { id, label, value, onChange, options } = props;
	return (
		<FormControl>
			<FormLabel>
				{label}
			</FormLabel>
			<RadioGroup
				row
				id = {id}
				value={value}
				onChange={onChange}
			>
				{
					options.map(
						item => (
							<FormControlLabel key={item.value} value={item.value} control={<MuiRadio />} label={item.title} />
						)
					) 
				}
                    
			</RadioGroup>
		</FormControl>
	);
};

export default Radio;