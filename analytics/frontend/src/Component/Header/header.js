import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

export default function Contact () {
    return(
        <>
           <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"><Link  to='/login'>LOGO</Link></span>

               <div className="form-inline my-2 my-lg-0">
                   <button className="btn btn-outline-success my-2 my-sm-0"><Link to='/login'>Login</Link></button>&nbsp;&nbsp;&nbsp;
                   <button className="btn btn-outline-success my-2 my-sm-0"><Link  to='/contact'>Contact</Link></button>&nbsp;&nbsp;&nbsp;
                   <button className="btn btn-outline-success my-2 my-sm-0"><Link to='/analytics'> Anaytics</Link></button>

               </div>
           </nav>
        </>
    )
}