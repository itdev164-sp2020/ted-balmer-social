import React, {useState} from "react"
import { navigate } from "gatsby"
//import Form from "./Form"
//import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

const Login = () => {
    const [state, setState] = useState ({
        username: ``,
        password: ``,
    })

    const handleUpdate = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(state)
    }

    if (isLoggedIn()) {
        navigate(`/social-app/profile`)
        return null
    }

    return (
        <form method="post" onSubmit={event => {
            handleSubmit(event)
            navigate(`/app/profile`)
        }}>
        
        <p>Log In...</p>
        
        <label>
            Username
            <input type="text" name="username" onChange={handleUpdate}/>
        </label>

        <label>
            Password
            <input type="password" name="password" onChange={handleUpdate}/>
        </label>

        <input type="submit" value="Log In"/>
        
        </form>
    )
}

export default Login