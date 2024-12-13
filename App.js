import React from 'react';
import{
    BrowserRouter as Router,Route,Routes
} from 'react-router-dom';
import Navbar from '../src/components/navbar';
import Register from '../src/components/register';
import Login from '../src.components/login';
import TaskList from '../src/components/tasklist';

const App=() =>{
    return (
        <Router>
            <Navbar/>
            <Routes>
                {/*Registration Page */}
                <Route path="/register" element={<Register/>}/>
                {/*Login Page */}
                <Route path="/login" element={<Login/>}/>
                {/*Private Task List */}
                <Route path="/tasks" element={<TaskList/>}/>
            </Routes>
        </Router>
    );
};
export default App;