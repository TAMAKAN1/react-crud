
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import http from "../http";
export default function Edit() {
    const navigate=useNavigate();
    const [inputs,setInputs]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        fetchUser();
    },[]); 
    const fetchUser=()=>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            });
        });
    }
    
    const handleChange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setInputs(values=>({...values, [name]:value}))
    }
    const submitForm=()=>{
       http.put('/users-update/'+id ,inputs).then((res)=>{
         navigate('/');
       })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="card p-2 bg-dark text-white text-center">Edit User form</h2>
 
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' name="name" className="form-control"  
                        value={inputs.name || ''} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='email' name="email" className="form-control" value={inputs.email || ''} onChange={handleChange} />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-dark  mt-2 text-white d-block col-md-12">Add</button>
                </div>
            </div>
        </div>
    )
}