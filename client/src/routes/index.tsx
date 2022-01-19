import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import SignInPage from '../screens/signin';
import SignUpPage from '../screens/signup'; 
import Home from '../screens/home';
import SideNav from '../components/sidenav';
import ManageExpense from '../components/manage-expense';
import TrackExpense from '../components/track-expense';
import Profile from '../components/profile';
import Dashboard from '../components/dashboard';

const Router = () => {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignInPage/>} />
				<Route path='/signup' element={<SignUpPage/>} />
				<Route path='/sidebar' element={<SideNav/>} />
				<Route path='/home' element={<Home/>} >
					<Route index element={<Dashboard />} />
					<Route path='manage-expense' element={<ManageExpense />} />
					<Route path='track-expense' element={<TrackExpense />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</BrowserRouter>
		
	);
};

export default Router;