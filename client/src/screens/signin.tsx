import React from 'react';
import SignIn from '../components/signin';
import Register from '../components/register';

const SignInPage = () => {
	return (
		<Register 
			signin={<SignIn />} 
			dashboardpage={'Sign up'} 
			dashboardMessage={'Create a new account here ! '}
		/>
	);
};

export default SignInPage;