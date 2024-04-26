import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import style from './RigthChildHeader.module.css'

export const RigthChildHeader=()=>{

     const ctx=useContext(Context)
     
     const[FlageActiveAdd,setFlageActiveAdd]=useState(false)

     const ActiveModalBasked=()=>{
          ctx.onFlageHandler(true)
     }

     useEffect(()=>{
          setFlageActiveAdd(true)
         setTimeout(()=>{
               setFlageActiveAdd(false) 
           },300)
     },)
   

     return(
        <div className='col-6 h-100'>
        <div className='h-100 d-flex justify-content-center align-items-center'>
                      <div className={`text-white ${style.Box} ${FlageActiveAdd && style.Active}`} onClick={ActiveModalBasked}>
                           your cart<span>{ctx.SelectedItem.length}</span>
                      </div>
        </div>
        </div>
     )
}