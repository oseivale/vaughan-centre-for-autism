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
                                <li key={link.path}>
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <Link className={style.teleLink} href='tel:+16475185492'>tel: 647.518.5492</Link><br />
                    <Link className={style.teleLink} href='tel:+12898597676'>bus: 289.859.7676</Link>
                    <p>Mon - Sat: 8.00am - 6.00pm</p>
                    <h3>Locations</h3>
                    <p>9131 Keele Street, Suite A4,<br></br> Vaughan, Ontario L4K 0G7</p>
                    <p>1429 Kellough Street, <br />Innisfil Ontario, L9S 0H8.</p>
                </div>
            </div>
            <div className={style.bottomBorder}></div>
            <p className={style.copyrightText}>&copy;{` ${new Date().getFullYear()} Vaughan Centre for Autism`}</p>
        </footer>
    )
}