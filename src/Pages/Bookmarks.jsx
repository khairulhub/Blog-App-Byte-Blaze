import React, { useEffect, useState } from 'react';

import { deleteDataFromLocalStorage, getDataFromLocalStorage } from '../utilities';
import BlogsCard from '../components/Blogs/BlogsCard';
import Empty from '../components/Empty/Empty';

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        const bookmarks = getDataFromLocalStorage();
        setBlogs(bookmarks);
    },[]);
    const deleteBlog = (id) => {
         deleteDataFromLocalStorage(id);
         const bookmarks = getDataFromLocalStorage();
         setBlogs(bookmarks);
       
      };


    if(blogs.length<1) return <Empty message={'No Bookmarks Found'} address={'/blogs'} label={'Browse blogs'} />

    return (
       <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 min-h-[calc(100vh-116px)]'>
       <div className="grid justify-center grid-cols-1 gap-6 py-8 lg:px-10 sm:grid-cols-2 lg:grid-cols-3">
       {
        blogs.map(blog => <BlogsCard deletable={true} key={blog.id} deleteBlog={deleteBlog} blog={blog} />)
       }
      
    </div>
       </div>
    );
};

export default Bookmarks;