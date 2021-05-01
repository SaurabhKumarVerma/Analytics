import React from "react";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import fbLogin from "../../axios/Facebook/facebookLogin";
import gLogin from "../../axios/Google/googleLogin";

export default function Login() {


    const responseFacebook = async  (response) => {

        fbLogin(response.accessToken)
        console.log(response);
    }

    const responseGoogle = async (response) => {
        gLogin(response.accessToken)
        console.log(response);
    }

    return(
        <>
            <FacebookLogin
                appId="294715465446463"
                fields="name,email,picture"
                callback={responseFacebook}
            />
            <br/>
            <br/>
            <GoogleLogin
                clientId="757625228085-t51dvs052r5ke2nevsf74c1u4bu1355l.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

            />,
        </>
    )
}

