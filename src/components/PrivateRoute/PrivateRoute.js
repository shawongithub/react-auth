import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;