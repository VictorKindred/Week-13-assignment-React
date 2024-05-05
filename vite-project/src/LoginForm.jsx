import React from 'react'
import './LoginForm.css'

function LoginForm(){
    return (
        <div className='login-form'>
            <h3>LOGIN</h3>
            <form>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <button type='submit'>LOG IN</button>
            </form>
        </div>
    )
}

export default LoginForm