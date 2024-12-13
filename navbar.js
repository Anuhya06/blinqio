import React from "react";
import {Link, useNavigate} from 'react-router-dom';

const Navbar=()=>{
    const navigate=useNavigate();
    const token=localStorage.getItem('token');
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    };
    return(
        <nav>
            <h1>Task Manager</h1>
            {!token ?(
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/Login">Login</Link>
                </div>):(
                    <button onClick={handleLogout}>Logout</button>)
                }
        </nav>
    );
};