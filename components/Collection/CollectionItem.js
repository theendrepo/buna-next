import React from 'react'
import Image from 'next/image'


const CollectionItem = ({ filteredCollection, collections, filterCollection }) => {
  return (
      <div className="collection">
          {collections.filter(filterCollection).map(
            filteredCollection => (
              <div className="collection__item" key={filteredCollection.title} >
                {/* <img src={filteredCollection.node.featuredImage.node.localFile.url} /> */}
                {filteredCollection.featuredImage.node.sourceUrl && 
                  <Image src={filteredCollection.featuredImage.node.sourceUrl} width={400} height={700} />
                }
                {filteredCollection.title && 
                  <div className="collection__title">
                    <h4 className="title-lg">{filteredCollection.title}</h4>
                  </div>
                }
                {filteredCollection.content && 
                  <div className="collection__description">
                    <p dangerouslySetInnerHTML={{__html:filteredCollection.content}}></p>
                  </div>
                }
                {filteredCollection.collectionCategory.nodes && 
                  <div className="collection__category">
                    {filteredCollection.collectionCategory.nodes &&
                    filteredCollection.collectionCategory.nodes.map((category, index) =>{
                      return index === 0 ? 
                      category.name : ' / ' + category.name
                    })}
                  </div>
                }
              </div>
            )
          )}
      </div>
  )
}

export default CollectionItem
