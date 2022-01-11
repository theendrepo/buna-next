import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import Layout from "../components/layout"

import CollectionFilter from '../components/Collection/CollectionFilter'
import CollectionItem from "../components/Collection/CollectionItem"

import image1 from '../images/img1.jpg';
import { getMainMenu, getCollections, getCollectionCategories } from '../lib/api'

const Collection = ({ mainMenu, allCollections, collectionCategories }) => {
  const [categoryFilter, setCategoryFilter] = useState('All') 
  let collections = [];
  console.log("collections..", allCollections);
  console.log("collectionCategories..", collectionCategories);
    
  function handleCategoryFilter(cat){
    setCategoryFilter(cat);
  }
  function filterCollection(collection){
    if(categoryFilter == 'All'){
      return collection;
    }
    return collection.collectionCategory.nodes.find( ({name}) => name == categoryFilter );
  }
  return(
    <Layout menuItems={mainMenu}>
        <section className="collection-wrap">
          <div className="container">
            <CollectionFilter 
            collectionCategories={collectionCategories} 
            categoryFilter={categoryFilter} 
            handleCategoryFilter={handleCategoryFilter} />
            <CollectionItem 
              collections={allCollections}
              filterCollection={filterCollection} />
          </div>
        </section>
    </Layout>
  )
}

export default Collection


export async function getServerSideProps() {
  const mainMenu = await getMainMenu();
  const allCollections = await getCollections();
  const collectionCategories = await getCollectionCategories();
  return {
    props: {
      mainMenu,
      allCollections,
      collectionCategories
    }
  };
}