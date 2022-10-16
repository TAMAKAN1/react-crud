import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../http";
export default function View() {
    const {id}=useParams();
    const [user, setUsers] = useState([]);
    useEffect(() => {
        fetechAllUsers();
    }, []);
    const fetechAllUsers = () => {
        http.get('/users-view/'+id).then(res => {
            setUsers(res.data);

        })
    }
    return (
        <div>
            <div className="row">
                <div className="card col-md-8 offset-md-2 p-4">
                 <p>Name: {user.name}</p>
                 <p>Email: {user.email}</p>
                </div>
            </div>
             
        </div>
    )
}