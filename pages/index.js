import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from "../components/Hero/hero"
import Layout from "../components/layout"

import { getMainMenu,getHeroSlider } from '../lib/api'

export default function Home({mainMenu,heroSlider}) {
  return (
    <Layout menuItems={mainMenu} classes={"page-home"}>
      <Hero heroSlider={heroSlider} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const mainMenu = await getMainMenu();
  const heroSlider = await getHeroSlider();
  return {
    props: {
      mainMenu,
      heroSlider
    }
  };
}