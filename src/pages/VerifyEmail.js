import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {instance} from "../axios"

const VerifyEmail = () =>
{
    let {token} = useParams();
    useEffect( () =>
    {
        instance.post( `users/email/verify/${ token }`, {
           token
        } ).then((response) => console.log(response)
       ).catch((err) => console.log(err.response))
    },[])

    return (
        <div>
            Hello
        </div>
    )
}

export default VerifyEmail
