import Image from "next/image";
import style from './Tertiary.module.css';
import { HomeIcon } from "@/icons/home";
import { nunito_sans } from "@/fonts/fonts";
import Link from "next/link";

export function TertiaryCard({ cardImage, cardLinkLabel, CardIcon, bgColor, path }) {
    return (
        <Link className={style.cardContainer} href={path}>
            <div className={`${style.contentWrapper} ${nunito_sans.className}`}>
                <Image src={cardImage} width={200} height={200} alt='' />
                <div className={style.textWrapper} style={{ backgroundColor: `${bgColor}` }}>
                    <div style={{ backgroundColor: `${bgColor}` }} className={style.iconWrapper}><CardIcon /></div>
                    <h1>{cardLinkLabel}</h1>
                </div>
            </div>
        </Link >

    )
}