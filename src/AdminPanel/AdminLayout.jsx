import React from "react";
import AdminNavbar from "./Navbar/Index"
import AdminFooter from "./Footer/Footer"
export default function AdminLayout({children}){
  return(
      <>
          <AdminNavbar/>
          <div className="content-wrapper">
              {children}
          </div>
          <AdminFooter/>
      </>
  )
}