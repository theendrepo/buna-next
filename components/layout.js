/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
 import * as React from "react"
 import { useState } from "react"
 
 import Header from "./header"
 import Footer from "./footer"
 
 const Layout = ({ children, classes, menuItems }) => {
 
   const [navActive, setNavActive] = useState(false);
   const handleMobNav = () => {
     setNavActive( (prevState) => !prevState );
   }
 
   return (
     <>
       <Header menuItems={menuItems} navActive={navActive} handleMobNav={handleMobNav} siteTitle={'title'} />
         <main className={classes}>{children}</main>
       <Footer />
     </>
   )
 }
 
 export default Layout
 