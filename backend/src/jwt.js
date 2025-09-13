const jwt=require('jsonwebtoken');
const secret_key="my_secret_key";

const generateToken=({_id,type})=>{
   const token=jwt.sign({_id,type},secret_key,{expiresIn:'5h'});
   return token;
}   

const verifyToken=(token)=>{
   try{
    const payload=jwt.verify(token, secret_key);
    return {status:true, payload};
   }catch(err){
    console.error(err);
    return {status:false, payload:undefined};
   }
};

module.exports={generateToken, verifyToken};