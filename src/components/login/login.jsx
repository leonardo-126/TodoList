import './login.scss'

export const Login = ({setModalProps}) => {
    return (
        <>
            <div className="container-child">
                <h1>Login</h1>
                <div className='container-child-login'>
                    <label>
                        Email:
                        <input type='email'></input>
                    </label>
                    <label>
                        Password:
                        <input type='password'></input>
                    </label>
                    <button type='submit'>Login</button>
                </div>
                <div className="container-child-register">
                    <p>Nao possui uma conta <span>criar conta...</span></p>
                    <button onClick={setModalProps}>Cancelar</button>
                </div>
            </div>
        </>
    )
}