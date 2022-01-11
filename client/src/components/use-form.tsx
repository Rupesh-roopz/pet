import React, { useState } from 'react';

type useFormProps = {
	firstName: string;
    lastName: string;
    dateOfBirth: null;
    profession: string;
    gender: string;
    phoneNumber: string;
    email: string;
    password: string;
    reEnterPassword: string;
    isAdmin: string;

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

export default useForm;