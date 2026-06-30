import { useNavigate } from "react-router-dom";
import { handleUserSignup } from "../services/userapi";
import { useState } from "react";

function SignUp() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
async function handleSignUp() {
    try{
        await handleUserSignup(name,email,password);
        navigate('/')
    }
    catch(err){
       console.log(err);
            alert(
                err.response?.data?.message ||
                "Invalid email or password"
            );
    }
}
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                
                <h1 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h1>

                <p className="text-gray-500 text-center mb-6">
                    Sign up to get started
                </p>

                <form className="space-y-4"
                        onSubmit={(e)=>{
                            e.preventDefault();
                            handleSignUp();
                        }}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium mb-1"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="grow border-gray-300" />
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <hr className="grow border-gray-300" />
                </div>

                <button
                    className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a className="text-blue-600 cursor-pointer hover:underline"
                    href="/logIn">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;