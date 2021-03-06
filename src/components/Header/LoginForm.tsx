import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { actions } from 'features/users'

const Login = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const login = () => {
        dispatch(actions.loginUser({name, password}))
    }
    return (
        <>
            <label>
                Name
                <input 
                type="text"
                data-test="login-form-input"
                value={name}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setName(ev.target.value)}
                />
            </label>
            <label>
                Password
                <input 
                type="password"
                data-test="login-form-input"
                value={password}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setPassword(ev.target.value)}
                />
            </label>
            <button
            data-test="login-form-button"
            onClick={() => login()}
            >
                Login    
            </button>
        </>
    )
}

export default Login