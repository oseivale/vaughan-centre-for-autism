import style from './MainNav.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Close } from '../../icons/close'
import { Hamburger } from '../../icons/hamburger'

export function MainNav() {
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
        </nav>
    )
}