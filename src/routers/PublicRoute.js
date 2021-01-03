import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * To prevent the use case of a user login again without logout before.
 */
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)

            )}
        />
    )
}

// Argument Validation Required
PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
