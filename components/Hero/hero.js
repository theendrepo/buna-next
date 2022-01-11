import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Mousewheel, Direction } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/mousewheel"

const Hero = ({heroSlider}) => {
    console.log("heroSlider..", heroSlider);

    return (
        <section className="hero-slider">
            <Swiper modules={[Mousewheel, Pagination]} 
                slidesPerView={1} 
                mousewheel={true} 
                direction={'vertical'} 
                pagination={{ "clickable": true }} >
                {/* <SwiperSlide className={"hero" + " hero-"+heroImagePosition + " hero-horz-"+heroImagePositionMobileX + " hero-vert-"+heroImagePositionMobileY }  */}
                { heroSlider.hero.heroSlider.map((hero, index)=>(
                    <SwiperSlide key={index} className="hero" style={{ backgroundImage: "url("+ hero.image.sourceUrl +")", }} >
                        <div className="container">
                            {hero.title && 
                                <div className="hero__title">
                                    <h1>{hero.title}</h1>
                                </div>
                            }
                            {hero.description && 
                                <div className="hero__desc">
                                    <p>{hero.description}</p>
                                </div>
                            }
                            {hero.buttonTitle && 
                                <div className="hero__button">
                                    <a href={hero.buttonLink} className="button button--pink">{hero.buttonTitle}</a>
                                </div>
                            }
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>
        </section>
    )
}
export default Hero