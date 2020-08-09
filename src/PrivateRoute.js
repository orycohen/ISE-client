import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './Contexts/auth.js';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render = {(props) => {
                return (
                    <AuthConsumer>
                        {isAuthenticated => isAuthenticated ? <Component {...props}/> : <Redirect to="/"/>}
                    </AuthConsumer>
                );
            }}
        />
    )
}

export default PrivateRoute;
