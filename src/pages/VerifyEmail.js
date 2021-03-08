import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {instance} from "../axios"

const VerifyEmail = () =>
{
    let {token} = useParams();
    useEffect( () =>
    {
        instance.post( `users/email/verify`, {
           token
        } ).then( ( response ) =>
        {
            if ( response.data.msg === "Token has expired" )
            {
                instance.post( `users/email/resend`, {
                    token
                }).then((response) => console.log(response.data)).catch((err) => console.log(err))
            }
            else
            {
                console.log( response );
            }
        }
       ).catch((err) => console.log(err))
    },[])

    return (
        <div>
            Hello
        </div>
    )
}

export default VerifyEmail
