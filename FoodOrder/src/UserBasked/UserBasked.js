import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../Context/Context';
import { SelectedFood } from './SelectedFood';
import style from './UserBasked.module.css'

export const UserBasked=()=>{
       const ctx=useContext(Context)
       const[FlageFocusBoxItem,setFlageFocusBoxItem]=useState(false)
       const InActiveModal=()=>{
           ctx.onFlageHandler(false)
       }

       const DeleteSelectedItem=()=>{
           ctx.onDeleteAllItems()
       }
       const FocusBoxItem=()=>{
           setFlageFocusBoxItem(true) 
           setTimeout(()=>{
            setFlageFocusBoxItem(false) 
           },300)
       }
         return (
           <>
           { ReactDOM.createPortal(
                <div className={`${style.Box} ${FlageFocusBoxItem ? style.Active : style.off}`} onClick={FocusBoxItem}>
                  <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 '>
                       <div className={style.BoxItem}>
                           <h5 onClick={InActiveModal}>X</h5>


                           {ctx.SelectedItem.length===0 && <h4>Selected List Item Is Empty</h4>} 


                           {ctx.SelectedItem.map((item)=>{
                               return  <SelectedFood key={item.id} Info={item}></SelectedFood>
                           })
                           }

                            {ctx.SelectedItem.length!==0 &&

                             <div className='d-flex  justify-content-around align-items-center'>
                            <h4>Total:${ctx.TotalPrice}</h4>
                            <button className='btn mt-1 text-white bg-success' onClick={DeleteSelectedItem}>Payment</button>
                            </div>
                            }
                       </div>
                  </div>
                </div>
            ,document.getElementById('ModalUserBasked'))}
           </>
         )
}