import React from "react";

import { Link } from "react-router-dom";

import { MdDeleteForever } from "react-icons/md"; 

import placeholder from "../../assets/404.jpg";


const BlogsCard = ({ blog, deletable, deleteBlog }) => {
  const { cover_image, title, description, published_at, id, url } = blog;
  
  return (
    <div className="relative flex ">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto transition bg-gray-900 border-2 hover:scale-105 group hover:no-underline focus:no-underline dark:bg-gray-50 border-primary hover:border-secondary border-opacity-30"
      >
        <img
          role="presentation"
          className="object-cover w-full bg-gray-500 rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholder}
        />
        <div className="p-6 space-y-2 text-white bg-transparent">
          <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </a>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div onClick={()=>deleteBlog(id)} className="absolute overflow-hidden rounded-full cursor-pointer -top-3 -right-3 bg-primary hover:bg-opacity-30 bg-opacity-20 hover:scale-105">
            <MdDeleteForever size={30} className=" text-secondary group-hover:text-primary" />
        </div>)}
    </div>
  );
};

export default BlogsCard;
