const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const sequelize=require('./config/db');
const userRoutes=require('./routes/userroutes');
const taskRoutes=require('/routes/taskRoutes');
dotenv.config();
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users',userRoutes);
app.use('/api/tasks',taskRoutes);
sequelize
.authenticate()
.then(()=>console.log('Database connected'))
.catch((err)=>console.error('Database connection failed:',err));
app.listen(4000,()=>console.log('server running on port 4000'))