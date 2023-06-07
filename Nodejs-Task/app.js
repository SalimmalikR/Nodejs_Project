const express=require('express');

const app=express();

app.use(express.json());

const db=require('./config/db')

const adminrouter=require('./routers/routers')

const userrouter=require('./routers/user_routers')

app.use(adminrouter)

app.use(userrouter)

app.listen(8000);
console.log('Port 8000 is now listening');