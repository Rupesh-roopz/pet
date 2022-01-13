import React from 'react';
import SignUp from '../components/signup';
import Register from '../components/register';

const SignUpPage = () => {
	return (
		<Register 
			signin={<SignUp />} 
			dashboardpage={'Sign in'} 
			dashboardMessage={'Already have an account ? '}
		/>
	);
};

export default SignUpPage;