import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import secureAxios from '../../axios/Contact/contactAxios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReCAPTCHA from "react-google-recaptcha";

export default function Registration() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
 

    const [UserRegsitration, setUserRegsitration] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message:""
    })

    const handleChange = (e) => {

        setUserRegsitration({ ...UserRegsitration, [e.target.name]: e.target.value })

    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const onSubmit = async (data) => {
        await secureAxios.post('contact/', UserRegsitration)
            .then(res => {

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
                    toast.success('We Will Contact You', {
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
            .catch(error => {
                console.log(error.data)
            })
    }
    return (
        <>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>First Name</label>

                                <input className="form-control" type='text' name='first_name' {...register("first_name", { required: true, minLength: 3, maxLength: 50, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                                {errors.first_name && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <label>Full Name</label>

                                    <input className="form-control" type='text' name='last_name' {...register("last_name", { required: true, minLength: 3, maxLength: 50, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                                    {errors.last_name && <span style={{ color: 'red' }}>This field is required</span>}
                                <br />

                                <label>Email</label>

                                <input className="form-control" type='email' name='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} onChange={handleChange} />


                                {errors.password && <span style={{ color: 'red' }}>Email Should is a@domain.com</span>}
                                <br />

                                <label>Message</label>

                                    <textarea  className="form-control" type='textarea' name='message' {...register("message", { required: true, minLength: 3, maxLength: 250, pattern: /^[a-z][a-z\s]*$/i })} onChange={handleChange} />


                                    {errors.message && <span style={{ color: 'red' }}>This field is required</span>}
                                    <br />
                                <ReCAPTCHA
                                    sitekey="6LdohMIaAAAAABXaYYLvBGwlheXUMF8KnAkN3jP5"
                                    onChange={onChange}
                                />
                                <br />
                                <div >
                                    <button className="form-control" id='btn' type='submit' >Register</button>
                                </div>
                            </form>

                        

            <ToastContainer
                transition={Zoom}
                limit='1'
            />





        </>
    )
}
