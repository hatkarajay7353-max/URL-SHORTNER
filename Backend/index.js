const express=require('express');
const urlRoute=require('./routes/url');
const userRoute=require('./routes/user')
const app=express();
const PORT=8001;
const {connectToMongoDB}=require('./connect')
const cors=require("cors")
const {restrictToLoggedInUser}=require("./middlewares/auth")

connectToMongoDB('mongodb://127.0.0.1:27017/URLshortener').then(()=>console.log('mongoDb connected'));
app.use(
    cors({
        origin: "http://localhost:5173",
        exposedHeaders: ["Authorization"],
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/user",userRoute);
app.use("/url",restrictToLoggedInUser,urlRoute);

app.listen(PORT,()=>console.log(`server started at ${PORT}`));