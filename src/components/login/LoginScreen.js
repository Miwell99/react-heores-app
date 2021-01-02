import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/')  // ! No sustituye la historia y se podria navegar hacia atrás estando deslogeado
        // history.replace('/');    // Sustituye la historia, para evitar cargar paginas antiguas al dar atras sin estar logeado.

        const action = {
            type: types.login,
            payload: {
                name: 'Miwell',
            }
        }
        dispatch(action);
        history.replace('/');
    }
    return (
        <div className="container m-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
