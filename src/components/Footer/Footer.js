import Link from "next/link"
import style from './Footer.module.css'

export function Footer({ footerLinks, publications }) {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerWrapper}>
                <div>
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
                </div>
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
                    <p>1-677-124-44227</p>
                    <p>Mon - Sat 8.00 - 18.00</p>
                    <p>9131 Keele Street, Suite A4, Vaughan, Ontario L4K 0G7</p>
                </div>
            </div>
            <div className={style.bottomBorder}></div>
            <p className={style.copyrightText}>&copy;{` Copyright Vaughan Center for Autism | ${new Date().getFullYear()}`}</p>
        </footer>
    )
}