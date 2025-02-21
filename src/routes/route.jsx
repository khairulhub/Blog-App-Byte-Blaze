import { createBrowserRouter } from "react-router-dom";

import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import MainLayouts from "../layout/MainLayouts";
import BlogDetails from "../components/Blogs/BlogDetails";
import BlogDetailsAuthor from "../components/Blogs/BlogDetailsAuthor";
import BlogDetailsContent from "../components/Blogs/BlogDetailsContent";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <BlogDetailsContent />,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <BlogDetailsAuthor />,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            ],
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ]
    },
   
  ]);