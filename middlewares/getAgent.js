'use strict';

function getAgent(req , res , next){
    req.myName= 'samar';
    req.browser= req.headers['user-agent'];


    next();
}
module.exports= getAgent;