import React from 'react';
import style from './PageWrapper.module.css';
import { nunito_sans } from '@/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Home from '@/pages';
import { HomeIcon } from '@/icons/home';


export function PageWrapper({ children, pageHeader, pageHeaderImg, pageHeaderBgColor }) {

    return (
        <div className={`${style.formContainer} ${nunito_sans.className}`}>

            <div className={style.headerContentWrapper}>

                <Image className={style.contactImg} alt='' src={pageHeaderImg} width={200} height={200} />
                <div className={style.formHeader}>
                    <h2>{pageHeader}</h2> 
                </div>
            </div>
            <div className={style.contactContentWrapper}>

                <div className={style.sideBar}>

                    <div>
                        <h2>Location</h2>
                        <p>9131 Keele Street, Suite A4,<br /> Vaughan, Ontario L4K 0G7</p>
                    </div>
                    <div>
                        <h2>Hours</h2>
                        <p>Mon - Sat: 8.00am - 6.00pm</p>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p>tel: 647.518.5492<br />bus: 289.859.7676</p>
                    </div>

                    {/* <h2>Quick Links</h2>
                    <div className={style.breadCrumb}><Link className={style.homeIcon} href='/'><HomeIcon /> Back to Home</Link></div>  */}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
