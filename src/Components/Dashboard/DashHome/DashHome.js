import React from 'react';
import './DashHome.scss';
import UpdateDetails from './UpdateDetails/UpdateDetails';
import DashHomeWelcome from './DashHomeWelcome/DashHomeWelcome';
import { useAuth } from '../../../Contexts/auth.js';
import { MagnetBox, Label } from '../../Styled';
import { Link, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import AddNeedy from './AddNeedy/AddNeedy';
import Requests from './Requests/Requests';

const DashHome = (props) => {
	  const { path } = useRouteMatch();
	const { user } = useAuth();
	const urlPart = user.type === "Manager" ? "add" : "request";
	const linkPart = user.type === "Manager" ? "Add" : "Request";
	return (
		<div className='DashHome'>
			<div className='DashHomeContent'>
			      <Switch>
				<Route exact path='/dashboard/home'>
				  <Redirect to={`${path}/welcome`}/>
				</Route>
				<Route path={`${path}/welcome`} component={DashHomeWelcome}/>
				<Route path={`${path}/update-details`} component={UpdateDetails}/>
				<Route path={`${path}/${urlPart}-needy`} component={AddNeedy}/>
				{ 
					user.type === 'Manager' &&
					<Route path={`${path}/requests`} component={Requests}/>
				}
			      </Switch>
			</div>
			<div className='DashHomeNav'>
				<Link to='/dashboard/home/welcome'>Home</Link><br/>
				<Link to='/dashboard/home/update-details'>Update</Link><br/>
				<Link to={`/dashboard/home/${urlPart}-needy`}>{linkPart} Needy</Link><br/>
				{
					user.type === 'Manager' &&
					<Link to='/dashboard/home/requests'>Requests</Link>
				}
			</div>
		</div>
	);
}

export default DashHome;
