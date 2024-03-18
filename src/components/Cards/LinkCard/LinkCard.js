import Image from "next/image";
// import img from '/public/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import style from './LinkCard.module.css';
import { nunito_sans } from "@/fonts/fonts";
import Link from "next/link";

export function LinkCard({ cardHeader, cardBody, path, cardImg }) {

    return (
        <Link className={style.cardLink} href={path}>
            <div className={style.cardContainer}>
                <div className={`${style.cardWrapper} ${nunito_sans.className}`}>
                    <Image alt='alt' src={cardImg} height={225} width={350} />
                    <div className={style.cardText}>
                        <h1>{cardHeader}</h1>
                        <p>{cardBody}</p>
                    </div>
                </div>
            </div>
        </Link>

    )

}