import React from 'react';
import style from './PageWrapper.module.css';
import { nunito_sans } from '@/fonts/fonts';
import Image from 'next/image';
import contactImg from '/public/unseen-studio-s9CC2SKySJM-unsplash.jpg';
import Link from 'next/link';
import { Download } from '@/icons/download';

export function PageWrapper({ children }) {

    return (
        <div className={`${style.formContainer} ${nunito_sans.className}`}>
            <div className={style.headerContentWrapper}>
                <Image className={style.contactImg} alt='' src={contactImg} width={200} height={200} />
                <div className={style.formHeader}>
                    <h2>About Us</h2>
                </div>
            </div>
            <div className={style.contactContentWrapper}>
                <div>
                    <h2>Location</h2>
                    <p>9131 Keele Street, Suite A4,<br /> Vaughan, Ontario L4K 0G7</p>
                    <h2>Hours</h2>
                    <p>Mon - Sat 8.00 - 18.00</p>
                    <h2>Quick Links</h2>
                    <Link className={'btn-link'} href='#'>Download our self-assessment form <Download /> </Link>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
