import style from './Header.module.css'
import { LeftChildHeader } from './LeftChildHeader'
import { RigthChildHeader } from './RigthChildHeader'


export const Header=()=>{
    return(
        <div className={`container-fluid ${style.BoxHeader}`}>
              <div className='row h-100'>
                     <LeftChildHeader></LeftChildHeader>
                     <RigthChildHeader></RigthChildHeader>  
              </div>
        </div>
    )
}