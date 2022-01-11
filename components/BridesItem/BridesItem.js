import React from 'react'
import Image from 'next/image'
import bridePlaceholder from '../../images/dress-placeholder.jpg';

const BridesItem = ({ stories }) => {
    console.log(stories);
    return (
        <div className="collection">
            {stories.map((item, index) => 
            <div className="collection__item" key={index} >
                {item.featuredImage && 
                    <Image src={item.featuredImage.node.sourceUrl} />
                }
                {!item.featuredImage && 
                    <Image src={bridePlaceholder} />
                }
                <div className="collection__title">
                    <h4 className="title-lg">{item.title}</h4>
                </div>
                {item.content && 
                    <div className="collection__description">
                    <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                    </div>
                }
                {item.bridesStories.client && 
                    <div className="collection__category" dangerouslySetInnerHTML={{__html:item.bridesStories.client}}></div>
                }
             </div>)}
        </div>
    )
}

export default BridesItem
