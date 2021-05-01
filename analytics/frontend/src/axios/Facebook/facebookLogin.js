import axios from "axios";


const fbLogin = (accesstoken) =>{
    console.log(accesstoken);
    axios.post('http://127.0.0.1:8000/auth/convert-token/',{
         token: accesstoken,
        backend: 'facebook',
        grant_type: 'convert_token',
        client_id: 'MbN5X5Hrwwkc7zypy7m3s6EiifGnMNDXmj1pBu4d',
        client_secret: 'qyZKmynJyIrKrInHcbvPxjiCLZUanhHhsDlj1WvEeTCb9cRhpvoiox82zpAvFmNPijdckCN00IQfqrMxKAxrIP1nVPyunJR9Uu8qch6c9hukrTZs3AkF1zap6N5nSFQx',
    })
        .then((res) =>{
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('refresh_token',res.data.refresh_token)
            console.log(res.data, 'Response From Backend')
        })

}


export default fbLogin;