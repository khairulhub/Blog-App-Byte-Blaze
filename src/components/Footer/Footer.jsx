import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 footer footer-center bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
