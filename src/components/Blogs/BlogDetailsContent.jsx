import React from "react";

import Markdown from "react-markdown";

import {  Link, useLoaderData } from "react-router-dom";

import rehypeRaw from "rehype-raw";

import placeholder from "../../assets/404.jpg";

const BlogDetailsContent = () => {
    const singleBlog = useLoaderData();
  const {
    cover_image,
    title,
    description,
    published_at,
    id,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
    tags, body_html
  } = singleBlog;
  return (

    <div className="p-2 mx-auto bg-gray-900 border-2 group hover:no-underline focus:no-underline dark:bg-gray-50 border-opacity-30">
           <img role="presentation" className="object-cover w-full bg-gray-500 rounded h-44 dark:bg-gray-500" src={cover_image || placeholder} />
           <div className="flex flex-wrap gap-2 py-6 border-t border-gray-400 border-dashed dark:border-gray-600">
            {
              tags.map((tag) => 
                  <Link key={tags.id}
                
                className="px-3 py-1 text-gray-900 rounded-sm bg-violet-400 dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </Link>
              )
            }
             
            </div>
           <div className="space-y-2 text-white bg-transparent">
               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
              <Markdown rehypePlugins={rehypeRaw} >{body_html}</Markdown>
           </div>
       </div>
        
    
  );
};

export default BlogDetailsContent;
