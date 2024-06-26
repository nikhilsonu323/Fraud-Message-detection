const jwt = require('jsonwebtoken');
const JWT_SECRET = "My_Secret";

const fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token'); 
    const success = false;
    if(!token){
        res.status(401).send({success,message:"please authenticate using a valid token"});
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch{
        res.status(401).send({success,message:"please authenticate using a valid token"});
    }
}

module.exports = fetchuser;