import NavBar from "../components/nav";
import { useState } from "react";
import {createShortURL} from '../services/api'
function Home() {
    const [url,setUrl]=useState("");
    const [shortUrl,setShortUrl]=useState("")
    async function handlePost() {
        try{
            const res= await createShortURL(url);
            setShortUrl(res.newURL);
        }
        catch(err){
            console.log(err);
            
        }  
    }
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-8">
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-3">
              URL Shortener
            </h1>

            <p className="text-gray-400 text-lg">
              Paste your long URL and get a short, shareable link instantly.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4"
                onSubmit={(e)=>{e.preventDefault();
                    handlePost();
                }}>
            <input
              type="text"
              placeholder="https://example.com/very/long/url"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              value={url}
              onChange={(e)=>setUrl(e.target.value)}

            />

            <div className="flex gap-3">
              <button
                type="button"
                className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Paste
              </button>

              <button
                type="submit"
                className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                
              >
                Shorten URL
              </button>
            </div>
          </form>

          {/* Result Section */}
          <div className="mt-8 p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300 text-sm mb-2">
              Your shortened URL: {shortUrl}
            </p>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 break-all"
              >
                short.ly/abc123
              </a>

              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Copy
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;