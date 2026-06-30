import { useActionState, useState } from 'react';
import reactLogo from '../assets/react.svg';
import { getAllUrls } from '../services/api';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const [urls,seturls]=useState([]);
    const navigate=useNavigate();
    async function handleGetUrls() {
        navigate('allUrls');
    }
  return (
    <nav className="w-full bg-gray-900 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={reactLogo}
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-bold text-white">
            ShortURL
          </h1>
        </div>

        {/* Navigation Button */}
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
        onClick={handleGetUrls}>
          
          All URLs
        </button>
      </div>
    </nav>
  );
}

export default NavBar;