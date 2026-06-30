import axios from "axios";

async function handleUserSignup(name,email,password){
    if(!name || !email || !password){
        throw new Error("Need All credentials");
    }
    try {
        const res=await axios.post("http://localhost:8001/user/signup",{
            name:name,
            email:email,
            password:password
        })
        const authHeader=res.headers.Authorization;
        const token=authHeader.split(" ")[1];
        localStorage.setItem("token", token);

        return res.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function handleUserLogIn(email,password) {
    if(!email || !password){
        throw new Error("Need All credentials");
    }
     try {
        const res=await axios.post("http://localhost:8001/user/login",{
            email:email,
            password:password
        })
        console.log(res.headers)
        const authHeader=res.headers.authorization;
        const token=authHeader.split(" ")[1];
        localStorage.setItem("token", token);

        return res.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export {handleUserSignup,handleUserLogIn}