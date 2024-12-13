import React, {useState} from 'react';
import {loginUser} from '../services/api';
import {useNavigate} from 'react-router-dom';

const Login = () =>{
    const [form,setForm]=useState({username:'',password:''});
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const {data}=await loginUser(form);
           localStorage.setItem('token',data.token);
           navigate('/tasks');
        }catch(error){
            console.error(error);
        }
    };
    return(
        <form onSUbmit={handleSubmit}>
            <h2>Login</h2>
            <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e)=>setForm({...form,username:e.target.value})}/>
            <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target,value})}/>
            <button type="submit">Login</button>
        </form>
    );
};
export default login