import Image from "next/image";
import img from '/public/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import style from './SecondaryCard.module.css';
import { nunito_sans } from "@/fonts/fonts";

export function SecondaryCard({ cardHeader, cardBody }) {

    return (
        <div className={style.cardContainer}>
            <div className={`${style.cardWrapper} ${nunito_sans.className}`}>
                <Image alt='alt' src={img} height={300} width={350} />
                <h1>{cardHeader}</h1>
                <p>{cardBody}</p>
            </div>
        </div>
    )

}