import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        // history.push('/')  // ! No sustituye la historia y se podria navegar hacia atrás estando deslogeado
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
