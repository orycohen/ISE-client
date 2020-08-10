import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Contexts/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { user } = useAuth();
    return (
        <Route {...rest}
            render={(props) => {
                if (user) {
                    return <Component {...props}/>;
                }
                else {
                    return <Redirect to={{pathname: "/login", state: {referer: props.location}}}/>;
                }
            }}
        />
    );
}

export default PrivateRoute;
