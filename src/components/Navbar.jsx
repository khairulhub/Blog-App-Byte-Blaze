import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const handlethemecolor = (e)=>{
        
        if(e.target.checked){
            setTheme('synthwave');
        }else{
            setTheme('light');
        }
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    },[theme]);

    const menu = [
        <li key="home" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
            Home
          </NavLink>
        </li>,
        <li key="blogs" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
            Blogs
          </NavLink>
        </li>,
        <li key="bookmarks" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
            Bookmarks
          </NavLink>
        </li>,
      ];
    
  return (
    <div className="fixed z-10 px-4 shadow-lg navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           
            {menu}
           
          </ul>
        </div>
        <Link to="/" className="gap-0 text-2xl font-bold normal-case btn btn-ghost text-secondary">
          Byte <span className="text-primary">Blaze</span>
        </Link>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 menu menu-horizontal">
            {menu}
        </ul>
        <label className="grid cursor-pointer place-items-center">
          <input onChange={(e)=>handlethemecolor(e)}
            type="checkbox"
            value="synthwave"
            className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
