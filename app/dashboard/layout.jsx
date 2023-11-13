import React from "react";
import Sidebar from "../ui/dasboard/sidebar/sidebar";
import Navbar from "../ui/dasboard/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
