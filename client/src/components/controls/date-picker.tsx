import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

type DatePickerProps = {
	id : string,
	label : string,
	value : ParsableDate
	onChange :(date: MaterialUiPickersDate, value?: string | null | undefined) => void
}
const DatePicker = (props: DatePickerProps) =>{

	const { id, label, value, onChange } = props;


	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker 
				label={label}
				format="MMM/dd/yyyy"
				id={id}
				value={value}
				onChange={onChange}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;