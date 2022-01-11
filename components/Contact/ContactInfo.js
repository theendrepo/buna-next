import React from 'react'
import Image from 'next/image'

import phoneSvg from '../../images/phone.png'

const ContactInfo = ({ contactDetails }) => {
    return (
        <section className="contact-info-wrap container">
            <div className="contact-info">
                {contactDetails.contact.contactInfo.map((item, index)=>
                    <div key={index} className="contact-info__item">
                        <div className="contact-info__icon">
                        {item.icon.sourceUrl &&
                            <Image src={item.icon.sourceUrl} layout="fill" />
                        }
                        </div>
                        {item.title && 
                            <div className="contact-info__title title-lg">{item.title}</div>
                        }
                        {item.content &&
                            <div className="contact-info__content">
                                <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                            </div>
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default ContactInfo
