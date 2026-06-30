const USER=require("../models/user")
const {setUser}=require("../services/auth")
async function handleUserSignup(req,res) {
   
    const body=req.body;
    if(!body.email  || !body.name ||!body.password) {
        return res.json({err:"Credentials required"});
    }
    try{
         const user=await USER.create({
            name:body.name,
            email:body.email,
            password:body.password
        });
        const token=setUser(user);
        res.set("Authorization", `Bearer ${token}`);

        return res.status(201).json({
            message: "Signup successful"
        });

    }
    catch(err){
        console.log(err);
         return res.status(500).json({
            error: "Internal Server Error",})
    }
}
async function handleUserLogin(req,res) {
    const body=req.body;
   if(!body.email  ||!body.password) {
        return res.json({err:"Credentials required"});
    }

    try{
        const user=await USER.findOne({
            email:body.email.trim(),
           
        })
         console.log(user)
        if(!user){
            return res.status(404).json({err:"No user with these credentials"})
        }
       
        const token=setUser(user);
        
        res.set("Authorization", `Bearer ${token}`);

        return res.status(200).json({
            message: "Signup successful"
        });
    }
    catch(err){
        console.log(err);
         return res.status(500).json({
            error: "Internal Server Error",})
    }
}
module.exports={
    handleUserSignup,
    handleUserLogin

}