import axios from "axios";


const gLogin = (accesstoken) =>{
    console.log(accesstoken);
    axios.post('http://127.0.0.1:8000/auth/convert-token/',{
        token: accesstoken,
        backend: 'google-oauth2',
        grant_type: 'convert_token',
        client_id: 'nXy8fwSny65o4BMU0CkwVOuZgKtikihREUwLCUYA',
        client_secret: 'aN48sugGZfXGC0SWG6NJssemfQpYqW6V3FAkBFXioZWf86TjtRThHCyr5S5MLYzg3p7f0PCQCzdcZSxa6Y4wGJk5xO1V9XVesTJra2nzwAXU5I790tfaPhiCUq3WBQbz',
    })
        .then((res) =>{
            localStorage.setItem('access_token', res.data.access_token)

            console.log(res.data, 'Response From Backend')
        })

}


export default gLogin;