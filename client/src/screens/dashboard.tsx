import { Grid } from '@material-ui/core';
import Header from '../components/header';
import SideNav from '../components/sidenav';
const Dashboard = () => {
	return (
		<Grid container>
			<Grid item xs={12} style={{ minHeight : '10vh' }}>
				<Header />
			</Grid>
			<Grid item xs={2} style={{ backgroundColor : 'blue' ,minHeight : '90vh' }}>
				<SideNav />
			</Grid>
			<Grid item xs={10} style={{ backgroundColor : 'blue' ,minHeight : '90vh' }}>
                hjshj
			</Grid>
		</Grid>
	);
};

export default Dashboard;