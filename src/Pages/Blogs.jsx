// import React, { useEffect, useState } from 'react';

import { useLoaderData } from "react-router-dom";

import BlogsCard from "../components/Blogs/BlogsCard";
import placeholder from "../assets/404.jpg";

const Blogs = () => {
    // const [blogs, setBlogs] = useState([]);
    // useEffect(()=>{
    //     fetch('https://dev.to/api/articles?per_pages=20&top=7')
    //     .then(res=>res.json())
    //     .then(data=>setBlogs(data))

    // },[])
    // console.log(blogs);

    
    const blogs = useLoaderData();
    console.log(blogs.length);
    
    return (
        <div>
        <section className="text-gray-100 dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto bg-gray-900 sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={blogs[0].cover_image || placeholder} alt={blogs[0].title} className="object-cover w-full h-64 bg-gray-500 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                    <p>{blogs[0].description}</p>
                </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {
                blogs.map(blog => <BlogsCard key={blog.id} blog={blog} />)
               }
              
            </div>
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 text-sm text-gray-400 bg-gray-900 rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Blogs;