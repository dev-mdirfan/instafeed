import React from 'react';
import { Link } from 'react-router-dom'

const CategoryNews = () => {
    return (
        <>
            <div className="text-center my-5">
                <Link className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-3 cursor-pointer" to="/sports">
                    Sports
                </Link>
                <Link className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-lg font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mx-3 cursor-pointer" to="/entertainment">
                    Entertainment
                </Link>
                <Link className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mx-3 cursor-pointer" to="/technology">
                    Technology
                </Link>
                <Link className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mx-3 cursor-pointer" to="/politics">
                    Politics
                </Link>
                <Link className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-lg font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mx-3 cursor-pointer" to="/health">
                    Health
                </Link>
                <Link className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-lg font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mx-3 cursor-pointer" to="/science">
                    Science
                </Link>
                <Link className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-lg font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mx-3 cursor-pointer" to="/business">
                    Business
                </Link>
            </div>
        </>
    );
};

export default CategoryNews;
