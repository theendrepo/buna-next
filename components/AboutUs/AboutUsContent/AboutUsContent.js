import React from 'react'
import Image from 'next/image'

import placeholderImg from '../../../images/dress-placeholder.jpg';

const AboutUsContent = ({subTitle, content, aboutData}) => {
    console.log("Aboutdata", aboutData);

    return (
        <section className="about-wrap container">
            <div className="about">
                {aboutData.featuredImage && 
                    <div className="about__image">
                        <Image src={aboutData.featuredImage.node.sourceUrl}  layout='fill' />
                    </div>
                }
                <div className="heading-section">
                    <h2 className="title-xl">{aboutData.title}</h2>
                </div>
                <div className="about__content" dangerouslySetInnerHTML={{ __html: aboutData.content }} >
                </div>
            </div>
        </section>
    )
}

export default AboutUsContent
