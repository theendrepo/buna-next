import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"

import { getMainMenu, getAboutData } from '../lib/api'
import AboutUsContent from "../components/AboutUs/AboutUsContent/AboutUsContent"

const About = ({mainMenu, aboutData}) => {
    return(
        <Layout menuItems={mainMenu}>
            <AboutUsContent aboutData={aboutData} />
        </Layout>
    )
}
export default About

export async function getServerSideProps() {
    const mainMenu = await getMainMenu();
    const aboutData = await getAboutData();
    return {
      props: {
        mainMenu,
        aboutData
      }
    };
}