import style from './PrimaryCard.module.css'
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../../../fonts/fonts';

export function PrimaryCard({ icon, cardDescription, cardHeader }) {


    return (
        <div className={style.cardContainer}>
            <div>
                <div className={style.headerWrapper}>
                    <span className={style.icon}>{icon}</span>
                    <h1 className={nunito_sans.className}>{cardHeader}</h1>

                </div>
                <p className={nunito_sans.className}>{cardDescription}</p>
            </div>
        </div>
    )
}