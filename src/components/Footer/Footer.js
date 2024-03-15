import Link from "next/link"
import Image from "next/image";
import style from './Footer.module.css'
import { arimo, nunito_sans, grupo, staatliches } from '../../fonts/fonts';
import img from '/public/Final.gif';

export function Footer({ footerLinks, publications }) {
    return (
        <footer className={`${style.footerContainer} ${nunito_sans.className}`}>
            <div className={style.footerWrapper}>
                <div>
                    <Image width={180} height={200} alt='' src={img} />
                </div>
                {/* <div>
                    <h1>Publications</h1>
                    <ul className={style.linkWrapper}>
                        {publications.map(publication => {
                            return (
                                <li key={''}>
                                    <Link href='#'>{publication.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div> */}
                <div>
                    <h1>Helpful Links</h1>
                    <ul className={style.linkWrapper}>
                        {footerLinks.map(link => {
                            return (
                                <li key={'#'}>
                                    <Link href='#'>{link.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>tel: 647.518.5492</p>
                    <p>bus: 289.859.7676</p>

                    <p>Mon - Sat 8.00 - 18.00</p>
                    <p>9131 Keele Street, Suite A4,<br></br> Vaughan, Ontario L4K 0G7</p>
                </div>
            </div>
            <div className={style.bottomBorder}></div>
            <p className={style.copyrightText}>&copy;{` ${new Date().getFullYear()} Vaughan Center for Autism`}</p>
        </footer>
    )
}