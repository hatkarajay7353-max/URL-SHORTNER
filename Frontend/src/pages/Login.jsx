import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { handleUserLogIn } from "../services/userapi";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            
            const response = await handleUserLogIn(email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message ||
                "Invalid email or password"
            );
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-gray-500 text-center mb-6">
                    Login to your account
                </p>

                <form className="space-y-4" onSubmit={handleLogin}>
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
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;