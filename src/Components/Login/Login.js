import React from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import { useAuth } from '../../Contexts/auth';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { MagnetBox } from '../../Components/Styled';
import './Login.scss';

const Login = (props) => {
  const referer = (props.location.state && props.location.state.referer) || '/';
  const { path } = useRouteMatch();
  const { user } = useAuth();
  if (user) {
    return <Redirect to={referer}/>
  }
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Redirect to={{pathname:`${path}/signin`, state:{referer: props.location}}}/>
        </Route>
        <MagnetBox top distance="100px">
          <Route path={`${path}/signin`} component={Signin}/>
          <Route path={`${path}/signup`} component={Signup}/>
        </MagnetBox>
      </Switch>
    </>
  );
};

export default Login;
