'use strict';

function square(n){
    return (req , res , next)=>{
        req.number= n*n;
        

        next();

    }
}
module.exports=square;
 