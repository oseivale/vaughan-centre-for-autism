import Link from "next/link";
import style from './PageRow.module.css'
import { nunito_sans } from "@/fonts/fonts";
import { Pattern, PuzzlePattern, SwirlPattern } from "@/icons/pattern";


export function PageRow({ columns, id, pattern }) {


    return (
        <section id={style[id]} className={`${style.rowContainer} ${nunito_sans.className}`}>
            <div className={style.rowWrapper}>
                {columns.map(column => {
                    return (
                        <div key='' className={style.columnWrapper}>
                            <h1>{column.header}</h1>
                            {pattern && (
                                <SwirlPattern />
                            )}

                            {/* <PuzzlePattern /> */}
                            <h2>{column.subheader}</h2>
                            <p>{column.bodyCopy}</p>
                            {column.ctas && (
                                <div>
                                    {column.ctas.map(cta => (
                                        <Link className={'btnSecondary'} key='' href={cta.ctaPath}>{cta.ctaLabel}</Link>
                                    ))}
                                </div>
                            )}

                        </div>
                    )

                })}
            </div>
        </section>
    )
}