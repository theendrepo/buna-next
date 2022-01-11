import * as React from "react"
// import PropTypes from "prop-types"
import Link from "next/link"
import Image from "next/image"

import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagramsvg.svg'
import linkedin from '../images/linkedIn.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__details container">
                <h2 className="footer__email title-xl" dangerouslySetInnerHTML={{ __html: "test@mail.com" }}></h2>
                <div className="footer__socials">
                    <ul>
                        <li>
                            <Link target="_blank" href="#">
                                <Image src={facebook} />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="#">
                                <Image src={instagram} />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="#">
                                <Image src={twitter} />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="#">
                                <Image src={linkedin} />
                            </Link>
                        </li>
                    </ul>
                    <div className="copyright">©{new Date().getFullYear()} Havere Bunjaku</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
