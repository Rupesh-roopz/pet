import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker as MUIDatePicker } from '@material-ui/pickers';
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
				autoOk
				id={id}
				variant="inline"
				inputVariant="outlined"
				openTo = 'year'
				label={label}
				format="dd/MM/yyyy"
				value={value}
				onChange={onChange}
				required
				// animateYearScrolling
				
			/>
			{/* <MUIDatePicker
				id={id}
				fullWidth
				onChange={onChange}
				value={value}
				label={label}
				format="dd / MM / yyyy"
				margin="normal"
				// maxDate={new Date()}
				// emptyLabel="custom label" //<--- custom placeholder when date is null
				//  InputProps={{ className: css.datepicker }}
			/> */}
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;