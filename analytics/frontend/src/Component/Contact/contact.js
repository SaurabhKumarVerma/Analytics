import React,{useState} from "react";
import {useForm} from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReCAPTCHA from "react-google-recaptcha";
import secureAxios from '../../axios/Contact/contactAxios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
export default function Contact () {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [statecontact, setStatecontact] = useState({
        firstName : '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {

        setStatecontact({ ...statecontact, [e.target.name]: e.target.value })

    }

    const onSubmit = async (data)=>{
        console.log(data)
        await secureAxios.post('contact/',data)
            .then(res =>{
                console.log(res.data)
                localStorage.setItem('error', res.data.error)
                if (res.data.error === localStorage.getItem('error')) {
                    toast.error(localStorage.getItem('error'), {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    });
                }
                else {
                    toast.success('Saved Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,


                    });
                }
            })
            .catch(error =>{
                 console.log(error.data)
            })
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }


return(
        <>

        <center>
            <div className="jumbotron col-md-4 m-5 mr-md-5" id='jumbo'>
                <h1 className="display-4">Contact Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name</label>

                    <input className="form-control" type='text' name='firstName' {...register("firstName", { required: true, minLength: 3, maxLength: 50, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                    {errors.firstName && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <label>Last Name</label>

                    <input className="form-control" type='text' name='lastName' {...register("lastName", { required: true, minLength: 3, maxLength: 50, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                    {errors.lastName && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />

                    <label>Email</label>

                    <input className="form-control" type='email' name='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} onChange={handleChange} />


                    {errors.password && <span style={{ color: 'red' }}>Email Should is a@domain.com</span>}
                    <br />

                    <label>Message</label>

                    <textarea className="form-control" type='textarea' name='message' {...register("message", { required: true, minLength: 3, maxLength: 3000, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                    {errors.message && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <ReCAPTCHA
                        sitekey='6LdohMIaAAAAABXaYYLvBGwlheXUMF8KnAkN3jP5'
                        size='visible'
                        onChange={onChange}
                    />
                    <br />
                    <div >
                        <button className="form-control btn btn-primary btn-lg" id='btn' type='submit' >Register</button>
                    </div>
                </form>
            </div>
        </center>

            <ToastContainer
                transition={Zoom}
                limit='1'
            />

        </>

    )
}