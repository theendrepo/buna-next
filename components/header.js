import React, {useState} from 'react'
import PropTypes from "prop-types"
import Link from "next/link"
import Image from "next/image"
import Logo from '../images/buna.svg'

import { useRouter } from 'next/router';
import { getAllPosts } from '../lib/api'

export default function Header({ siteTitle, handleMobNav, navActive, menuItems={menuItems} }){
  console.log("menuItems", menuItems);
  const router = useRouter();
  
  return(
    <header>
      <div className="container flex-j-sb">
        <div className="logo">
          <Link className="logo-link" href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            {menuItems.edges.map( (item, index) =>(
              <li key={index} >
                <Link href={ item.node.path } activeClassName="active">
                  <a className={ item.node.path == router.pathname + '/' ? 'active' : ''}>{ item.node.label }</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={navActive ? 'mobile-nav active' : 'mobile-nav'}>
          <ul>
            {menuItems.edges.map( (item, index) =>(
              <li key={index} >
                <Link href={ item.node.path } activeClassName="active">
                  <a className={ item.node.path == router.pathname + '/' ? 'active' : ''}>{ item.node.label }</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={navActive ? 'mobile-nav-btn active' : 'mobile-nav-btn'} onClick={handleMobNav} >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

