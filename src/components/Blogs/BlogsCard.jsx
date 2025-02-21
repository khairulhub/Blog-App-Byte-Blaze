import React from 'react';

import { Link } from 'react-router-dom';

import placeholder from "../../assets/404.jpg";
 
const BlogsCard = ({blog}) => {
    const {cover_image, title, description, published_at,id} = blog;
    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto transition bg-gray-900 border-2 hover:scale-105 group hover:no-underline focus:no-underline dark:bg-gray-50 border-primary hover:border-secondary border-opacity-30">
        <img role="presentation" className="object-cover w-full bg-gray-500 rounded h-44 dark:bg-gray-500" src={cover_image || placeholder} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
    );
};

export default BlogsCard;