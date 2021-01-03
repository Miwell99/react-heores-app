import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * To protect Routes only for logged users.
 */
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)

            )}
        />
    )
}

// Argument Validation Required
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
