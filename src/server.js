`use strict`;
const express= require('express');
const app= express();

app.get("/", (req , res)=>{
    res.send('hello ');

});

app.get("/data" , (req , res)=>{
    res.json({
        id:1,
        name:'samar azzam',
        email:'samarazza@gmail.com',
    })
})



function start(port){
    app.listen(port , ()=>{
        console.log(`i'm listining on port ${port} `);
    })


}
module.exports={
    app:app,
    start:start,
}