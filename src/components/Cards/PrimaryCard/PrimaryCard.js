import style from './PrimaryCard.module.css'
import { arimo, nunito_sans, grupo, staatliches } from '../../../fonts/fonts';
import Link from 'next/link';
import { Arrow } from '@/icons/arrow';

export function PrimaryCard({ icon, cardDescription, cardHeader }) {


    return (
        <div className={style.cardContainer}>
            <div>
                <div className={style.headerWrapper}>
                    <span className={style.icon}>{icon}</span>
                    <h1 className={nunito_sans.className}>{cardHeader}</h1>

                </div>
                <p className={nunito_sans.className}>{`${cardDescription.slice(0, 120)}...`}</p>
                <button className={style.cardButton} href='#'>{'Learn more'} <span><Arrow /></span></button>
            </div>
        </div>
    )
}