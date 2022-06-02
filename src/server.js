'use strict';
const express= require('express');
const stamper = require('../middlewares/stamper');
const notFoundHandler= require('../handlers/404');
const errorHandler= require('../handlers/500');
const logger= require('../middlewares/logger');
const square = require('../middlewares/square');
const getAgent = require('../middlewares/getAgent');




const app= express();

app.use(logger);


app.get("/", (req , res)=>{
    res.status(200).send('hello');

});

app.get("/data" , (req , res)=>{
    res.status(200).json({
        id:1,
        name:'samar azzam',
        email:'samarazza@gmail.com',
    });
});

app.get("/test", stamper, (req , res)=>{
    res.status(200).json({
        id:2,
        name:'test',
        email:'test@gmail.com',
        time: req.tmeStamp,


});
});
app.get("/test2", getAgent , (req , res)=>{
    res.json({
        message : 'test2 route',
        name : req.myName,
        browser : req.browser,
    })

});
app.get('/number' ,square(5),(req , res)=>{
    res.status(200).send(`the result is ${req.number}`);
});

app.get("/bad",(req , res)=>{
    let num=10;
    let result = num.forEach((x) => {
        console.log(x);
        
    });
    res.status(500).send(result);

});

app.use("*" , notFoundHandler);
app.use(errorHandler);


function start(port){
    app.listen(port , ()=>{
        console.log(`i'm listining on port ${port} `);
    });


}
module.exports = {
    app : app,
    start : start,
}