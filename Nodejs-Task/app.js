const express=require('express');

const app=express();

app.use(express.json());

const db=require('./config/db')

const globalerrorcontroller=require('./controller/globalerrorcontroller')

const adminrouter=require('./routers/routers')

const userrouter=require('./routers/user_routers')

app.use(adminrouter)

app.use(userrouter)

app.all('*',(req, res, next) =>{
    const err=new Error(`can't find ${req.originalUrl} on the server!`,'failes',404);
    next(err);
})

app.use(globalerrorcontroller)

app.listen(8000);
console.log('Port 8000 is now listening');