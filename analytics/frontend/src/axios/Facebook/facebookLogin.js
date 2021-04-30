import axios from "axios";


const fbLogin = (accesstoken) =>{
    axios.post('http://127.0.0.1:8000/auth/convert-token/',{
         token: accesstoken,
        backend: 'facebook',
        grant_type: 'convert_token',
        client_id: '',
        client_secrent: '',
    })
        .then((res) =>{
            console.log(res, 'Response From Backend')
        })

}


export default fbLogin;