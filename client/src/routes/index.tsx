import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import SignInPage from '../screens/signin';
import SignUpPage from '../screens/signup'; 
import Dashboard from '../screens/dashboard';
const Router = () => {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignInPage/>} />
				<Route path='/signup' element={<SignUpPage/>} />
				<Route path='/home' element={<Dashboard/>} />
			</Routes>
		</BrowserRouter>
		
	);
};

export default Router;