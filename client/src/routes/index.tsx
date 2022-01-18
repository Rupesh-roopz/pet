import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import SignInPage from '../screens/signin';
import SignUpPage from '../screens/signup'; 
import Dashboard from '../screens/dashboard';
import SideNav from '../components/sidenav';
import ManageExpense from '../components/manage-expense';
import TrackExpense from '../components/track-expense';
import Profile from '../components/profile';

const Router = () => {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignInPage/>} />
				<Route path='/signup' element={<SignUpPage/>} />
				<Route path='/home' element={<Dashboard/>} />
				<Route path='/sidebar' element={<SideNav/>} />
				<Route path='/manage-expense' element={<ManageExpense />} />
				<Route path='/track-expense' element={<TrackExpense />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</BrowserRouter>
		
	);
};

export default Router;