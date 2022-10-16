import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import http from "../http";
export default function Home() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetechAllUsers();
    }, []);
    const fetechAllUsers = () => {
        http.get('/users').then(res => {
            setUsers(res.data);

        })
    }
    const Delete=(id)=>{
        http.delete('/users-delete/'+id).then((res)=>{
            fetechAllUsers();
        })
     }
    return (
        <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link  className="btn btn-dark m-2 btn-sm"  to={{pathname: '/user-edit/'+user.id}}>Edit </Link>
                                    <Link  className="btn btn-primary m-2 btn-sm"  to={{pathname: '/user-view/'+user.id}}>View </Link>
                                    <Link  onClick={()=>Delete(user.id)} className="btn btn-danger  btn-sm  m-2"  > Delete</Link>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
        </div>
    )
}