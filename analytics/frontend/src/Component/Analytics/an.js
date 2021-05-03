import React, { Component } from 'react'
import axios from 'axios'
import DetailList from './DetailList/DetailList';
import EditBlog from './EditBlog/EditBlog';
import Header from '../../../Header/Header'
export default class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            count : [],
            date: []

        }
    }

    handleChange = (e) =>{

        setStatecontact({ ...statecontact, [e.target.name]: e.target.value })

    }


    render() {
        const {editMode} = this.state
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type='date' name='start'  onChange={handleChange} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type='date' name='end'  onChange={handleChange} />


                    <input type="submit" />
                </form>
            </>



        )
    }
}
