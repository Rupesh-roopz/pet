import { useState } from 'react';

type useFormProps = {
	firstName ?: string | undefined;
    lastName ?: string;
    dateOfBirth ?: null;
    profession ?: string;
    gender ?: string;
    phoneNumber ?: string;
    email ?: string;
    password ?: string;
    reEnterPassword ?: string;
    isAdmin ?: boolean | undefined;
	monthlyIncome ?: number | undefined,
	monthStartingDate ?: null

}

const handleState = (initialValues: useFormProps) => {

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

export default handleState;