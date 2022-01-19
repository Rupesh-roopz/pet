import { Box, Divider, Grid } from '@material-ui/core';
import React from 'react';
import handleState from '../utils/handle-state';
import DatePicker from './controls/date-picker';
import Input from './controls/input';
import Form from '../utils/form';

const ManageExpense = () => {
	const initialValues = {
		monthlyIncome : 0,
		monthStartingDate : null
	};

	const { values, handleInputChange } = handleState(initialValues);
	return (
		<div>
			rupesh
		</div>
	);
};

export default ManageExpense;