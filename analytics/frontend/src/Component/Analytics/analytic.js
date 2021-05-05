import React, {useState} from "react";
import LineChart from "./LineChart";
import secureAxios from "../../axios/Contact/contactAxios";
import { useForm } from "react-hook-form";
import {Line} from "react-chartjs-2";


export default function Analytic (){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [statecontact, setStatecontact] = useState({
        start : '',
        end: '',
    });
    const [fetchData,setFetchData] = useState([])

    const getDate = fetchData.map((item)=>{
        return item.date
    })

    const getCount = fetchData.map((item)=>{
        return item.Count
    })


    // const getDate = fetchData.map((item)=>{
    //     return item.date
    // })
    //
    // const getCount = fetchData.map((item)=>{
    //     return item.Count
    // })

    const handleChange = (e) =>{

        setStatecontact({ ...statecontact, [e.target.name]: e.target.value })

    }


    const onSubmit = async (data)=>{
        console.log(data)

        await secureAxios.post('all_date/',data)
            .then(res =>{
                setFetchData(res.data)
                console.log(res.data)
            })
            .catch(error =>{
                console.log(error.data)
            })
    }

    const data = {
        labels:getDate,
        datasets:[{
            label:'number of contact us details (C)',
            data:getCount,
            fill: false,
            backgroundColor: "rgb(0, 74, 94)",
            borderColor: "rgba(	75, 192, 192)",
        }]
    }
    const options = {
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0,
                    max:6,
                    stepSize:1
                }
            }]
        }
    }



    return(
        <>
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

            <div style={{width:"70%",height:"70%",margin:"70px"}}>
                <Line data={data} options={options} />
            </div>

        </>
    )
}