import Link from "next/link"
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../../fonts/fonts'
import style from './HeroBanner.module.css';

export function HeroBanner() {

    return (
        <section className={`${style.heroContainer} ${nunito_sans.className}`}>
            <div>
                <h1>Vaughan Centre for Autism</h1>
                <p>Our clinical intervention program integrates three common intervention methods for persons with autism spectrum disorder or any other developmental disability</p>
                <Link className={'btnPrimary'} href='#'>Learn More</Link>
            </div>
        </section>
    )
}