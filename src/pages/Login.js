import React, { useState } from 'react'
import {instance} from "../axios"

const Login = () =>
{
    const [email, setEmail] = useState( "" )
    const [password, setPassword] = useState( "" )
    
    const handleClick = (e) =>
    {
        e.preventDefault()
        instance.post( "users/login", {
            email,
            password
        } ).then((response) => console.log(response)
       ).catch((err) => console.log(err.response.data))
    }

    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remmeber Password</label>
            </div>
            <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login
