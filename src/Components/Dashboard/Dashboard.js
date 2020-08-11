import React from 'react';
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';
import DashHome from './DashHome/DashHome';
import Map from './Map/Map';
import Messages from './Messages/Messages';
import Tasks from './Tasks/Tasks';

const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path='/dashboard'>
          <Redirect to={`${path}/home`}/>
        </Route>
        <Route path={`${path}/home`} component={DashHome}/>
        <Route path={`${path}/map`} component={Map}/>
        <Route path={`${path}/messages`} component={Messages}/>
        <Route path={`${path}/tasks`} component={Tasks}/>
      </Switch>
    </div>
  );
}

export default Dashboard;
