import React, {useState} from "react";
import LineChart from "./LineChart";
import secureAxios from "../../axios/Contact/contactAxios";
import {toast} from "react-toastify";
import { useForm } from "react-hook-form";


export default function Analytic (){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [statecontact, setStatecontact] = useState({
        start : '',
        end: '',
    });

    const handleChange = (e) =>{

        setStatecontact({ ...statecontact, [e.target.name]: e.target.value })

    }


    const onSubmit = async (data)=>{
        console.log(data)

        await secureAxios.post('all_date/',data)
            .then(res =>{
                console.log(res.data)

            })
            .catch(error =>{
                console.log(error.data)
            })

    }



    return(
        <>
            <h1>This is Analytics Page</h1>
            <LineChart/>


            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type='date' name='start' {...register("start", { required: true })} onChange={handleChange} />
                {/* errors will return when field validation fails  */}
                {errors.start && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input type='date' name='end' {...register("end", { required: true })} onChange={handleChange} />
                {/* errors will return when field validation fails  */}
                {errors.end && <span>This field is required</span>}

                <input type="submit" />
            </form>

        </>
    )
}