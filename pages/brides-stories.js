import * as React from "react"
import { useState } from "react"
import Link  from "next/link"
import Layout from "../components/layout"
import BridesItem from "../components/BridesItem/BridesItem"

import { getMainMenu, getBrideStories } from '../lib/api'
import image1 from '../images/img1.jpg';

const BridesStories = ({ mainMenu, brideStories }) => {

  return(
    <Layout menuItems={mainMenu}>
      <section className="brides-stories-page collection-wrap">
          <div className="container">
            <BridesItem stories={brideStories} />
          </div>
        </section>
    </Layout>
  )
}
export default BridesStories


export async function getServerSideProps() {
  const mainMenu = await getMainMenu();
  const brideStories = await getBrideStories();
  return {
    props: {
      mainMenu,
      brideStories
    }
  };
}