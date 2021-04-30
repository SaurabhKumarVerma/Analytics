import React from "react";
import FacebookLogin from 'react-facebook-login';
import fbLogin from "../../axios/Facebook/facebookLogin";

export default function Login() {


    const responseFacebook = (response) => {
        console.log(response);
        fbLogin(response.accesstoken)
    }

    return(
        <>
            <FacebookLogin
                appId="294715465446463"
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </>
    )
}

