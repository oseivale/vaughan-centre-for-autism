/* Flexible row wrapper component */
import { nunito_sans } from '@/fonts/fonts'
import style from './PageRowWrapper.module.css'

export function PageRowWrapper({ children, sectionHeader, sectionSubheader, sectionBodyCopy, bgColor }) {

    return (
        <section className={`${nunito_sans.className} ${style.pageRowWrapperContainer}`} style={{ backgroundColor: `${bgColor}` }}>
            <div className={style.sectionHeader}>
                {sectionHeader && <h1>{sectionHeader}</h1>}
                {sectionSubheader && <h2>{sectionSubheader}</h2>}
                {sectionBodyCopy && <p>{sectionBodyCopy}</p>}
            </div>
            <div className={style.pageRowWrapper}>
                {children}
            </div>
        </section>
    )
}