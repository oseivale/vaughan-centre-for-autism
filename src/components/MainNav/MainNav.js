import style from './MainNav.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Close } from '../../icons/close'
import { Hamburger } from '../../icons/hamburger'
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../../fonts/fonts'

export function MainNav({ navLinks }) {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <nav className={`${style.navContainer} ${open ? style.open : style.close} `}>
            <div className={style.mobileNavWrapper}>
                <Link href='#'>LOGO</Link>
                <button onClick={toggleOpen}>{open ? <Close /> : <Hamburger />}</button>
            </div>
            {open && (
                <ul className={style.mobileNavLinkWrapper}>
                    {navLinks.map(navLink => {
                        return (
                            <li className={nunito_sans.className} key=''>
                                <Link href={navLink.path}>{navLink.label}</Link>
                            </li>
                        )

                    })}
                </ul>
            )}

        </nav>
    )
}