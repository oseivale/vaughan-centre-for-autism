import { Check } from "@/icons/check"
import style from './List.module.css'
import { nunito_sans } from "@/fonts/fonts"

export function List({ listData, listHeader }) {

    return (
        <div className={`${style.listContainer} ${nunito_sans.className}`}>
            <div>
                <h1>{listHeader}</h1>
                <ul className={style.listWrapper}>
                    {listData.map(listItem => {
                        return (
                            <li key='' className={style.listItemWrapper}>
                                <span className={style.icon}><Check /></span>
                                <p>{listItem.description}</p>
                            </li>
                        )
                    })}
                </ul>
                {/* <Link></Link> */}
            </div>
        </div>
    )
}