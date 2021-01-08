import React, { useContext } from 'react'

import { PageTitle } from '../ui/PageTitle';
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        username: '',
    })
    const { username } = formValues;

    const handleLogin = () => {
        if (username === '') {
            // username not valid
        } else {
            // history.push('/')  // ! No sustituye la historia y se podria navegar hacia atrás estando deslogeado
            // history.replace('/');    // Sustituye la historia, para evitar cargar paginas antiguas al dar atras sin estar logeado.

            const lastPath = localStorage.getItem('lastPath') || '/';   // To remember last route!

            const action = {
                type: types.login,
                payload: {
                    name: username,
                }
            }
            dispatch(action);
            history.replace(lastPath);
        }
    }



    return (
        <div className="container">
            <PageTitle title="Sign In" />
            <br></br>
            <div className="row d-flx justify-content-center">
                <div className="formContent col-md-3">
                    <small className="m-1">Please choose a username to continue</small>

                    <form>
                        <label htmlFor="inputName" className="m-1 sr-only">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control m-1"
                            placeholder="Your Username"
                            required
                            autoComplete="off"
                            value={username}
                            onChange={handleInputChange}
                        />
                        <button
                            className="btn btn-primary btn-block m-1"
                            type="submit"
                            onClick={handleLogin}
                        >Sign in</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
