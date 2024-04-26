import { property } from 'lodash'
import style from './Icon.module.css'



export const Icon=(prop)=>{
    return <i className={`${prop.classIcon} ${style.Icon}`}></i>
}