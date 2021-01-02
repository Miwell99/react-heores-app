import React, { useReducer } from 'react';

import { AppRouter } from './routers/AppRouter';

import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);
    // Now we can obtain the user on every part of the app, because is storaged on AppContext (using localStorage)

    return (
        <AuthContext.Provider value={ {user, dispatch} }>
            <AppRouter />
        </AuthContext.Provider>
    )
}
