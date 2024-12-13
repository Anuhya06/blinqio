import React, {useState} from 'react';
import {registerUser} from '../services/api';
import {useNavigate} from 'react-router-dom';

const Register = () =>{
    const [form,setForm]=useState({username:'',password:''});
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await registerUser(form);
            navigate('/login');
        }catch(error){
            console.error(error);
        }
    };
    return (
        <from onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e)=>setForm({...form, username:e.target.value})}/>
    <input
    type="password"
    placeholder="Password"
    value={form.password}
    onChange={(e)=>setForm({...form,password:e.target.value})}/>
    <button type="submit">Register</button>
        </from>
    );
};
export default Register;