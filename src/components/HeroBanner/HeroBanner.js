import Link from "next/link"
import { arimo, nunito_sans, grupo, staatliches } from '../../fonts/fonts'
import style from './HeroBanner.module.css';
import heroImgMobile from '/public/krakenimages-Br-ayoAxFuQ-unsplash.jpg'
import heroImg from '/public/annie-spratt-ORDz1m1-q0I-unsplash.jpg'
import Image from "next/image";

export function HeroBanner({ bgImg, id, ctaPath }) {

    return (
        <section id={style[`${id}`]} className={`${style.heroContainer} ${nunito_sans.className}`}>
            <Image className={style.heroImg} src={heroImg} alt='alt' height={300} width={400} />
            {/* <Image className={style.heroImgMobile} src={heroImgMobile} alt='alt' height={200} width={300} /> */}
            <div className={style.heroWrapper}>
                <h1>Vaughan Centre for Autism</h1>
                <p>We provide effective results-based clinical intervention treatments for persons with Autism Spectrum Disorder & other developmental disorders.</p>
                <div>
                    <Link className={'btnPrimary'} href={ctaPath}>Learn More</Link>
                </div>

            </div>
        </section>
    )
}