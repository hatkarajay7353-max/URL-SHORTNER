import { useState, useEffect } from "react";
import { getAllUrls } from "../services/api";

function AllURLS() {
    const [allUrls, setAllUrls] = useState([]);

    async function handleAllurls() {
        try {
            const res = await getAllUrls();
            setAllUrls(res.allUrls);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleAllurls();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    All Shortened URLs
                </h1>

                <div className="overflow-x-auto rounded-xl shadow-lg">
                    <table className="w-full bg-white">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="px-6 py-4 text-left">S.No</th>
                                <th className="px-6 py-4 text-left">
                                    Short URL
                                </th>
                                <th className="px-6 py-4 text-left">
                                    Original URL
                                </th>
                                <th className="px-6 py-4 text-center">
                                    Clicks
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allUrls.map((url, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100 transition"
                                >
                                    <td className="px-6 py-4 font-medium">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4 text-blue-600 font-semibold">
                                        {url.shortId}
                                    </td>

                                    <td className="px-6 py-4 max-w-md truncate">
                                        {url.redirectURL}
                                    </td>

                                    <td className="px-6 py-4 text-center">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                                            {url.visitHistory?.length || 0}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {allUrls.length === 0 && (
                        <div className="bg-white text-center py-8 text-gray-500">
                            No URLs Found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllURLS;