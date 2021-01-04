import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import { PageTitle } from '../ui/PageTitle';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/')  // ! No sustituye la historia y se podria navegar hacia atrás estando deslogeado
        // history.replace('/');    // Sustituye la historia, para evitar cargar paginas antiguas al dar atras sin estar logeado.

        const lastPath = localStorage.getItem('lastPath') || '/';   // To remember last route!

        const action = {
            type: types.login,
            payload: {
                name: 'Miwell',
            }
        }
        dispatch(action);
        history.replace(lastPath);
    }
    return (
        <div className="container m-5">
            <PageTitle title="Login" />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
