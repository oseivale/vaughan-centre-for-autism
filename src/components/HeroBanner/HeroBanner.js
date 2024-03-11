import Link from "next/link"
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../../fonts/fonts'
import style from './HeroBanner.module.css';
import heroImgMobile from '/public/krakenimages-Br-ayoAxFuQ-unsplash.jpg'
import heroImg from '/public/aaron-burden-1zR3WNSTnvY-unsplash.jpg'
import Image from "next/image";

export function HeroBanner({ bgImg, id }) {

    return (
        <section id={style[`${id}`]} className={`${style.heroContainer} ${nunito_sans.className}`}>
            <Image className={style.heroImg} src={heroImg} alt='alt' height={200} width={300} />
            <Image className={style.heroImgMobile} src={heroImgMobile} alt='alt' height={200} width={300} />
            <div className={style.heroWrapper}>
                <h1>Vaughan Centre for Autism</h1>
                <p>Our clinical intervention program integrates three common intervention methods for persons with autism spectrum disorder or any other developmental disability</p>
                <div>
                    <Link className={'btnPrimary'} href='#'>Learn More</Link>
                </div>

            </div>
        </section>
    )
}