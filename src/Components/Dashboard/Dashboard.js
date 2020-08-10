import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Admin from './Admin';
import AddUser from './AddUser';
import { useAuth } from '../../Contexts/auth';

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { user } = useAuth();
  return (
    <div>
      <div>Welcome {user.name}</div>
      <Link to={`${url}/admin`}>Admin Page</Link><br/>
      <Link to={`${url}/adduser`}>Add User</Link>
      <Switch>
        <Route exact path={path}>
          <div>Welcome to the dashboard</div>
        </Route>
        <Route path={`${path}/admin`} component={Admin}/>
        <Route path={`${path}/adduser`} component={AddUser}/>
      </Switch>
    </div>
  );
}

export default Dashboard;
