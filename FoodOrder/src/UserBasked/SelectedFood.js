import { useContext } from 'react'
import { Context } from '../Context/Context'
import style from './SelectedFood.module.css'


export const SelectedFood=(props)=>{
    const ctx=useContext(Context)
    const IncreaseFunc=()=>{
           ctx.onIncreaseAmountFood(props.Info.id)
    }
    const DecreaseFunc=(e)=>{
        if(props.Info.amount>1) ctx.onDecreaseAmountFood(props.Info.id)
    }
    const DeleteItem=()=>{
        ctx.onDeleteItem(props.Info.id)
    }
    
    return(
        <div className={`col-12 p-1 ${style.Box}`}>

              <div className='col-7 d-flex  align-items-center'>
                    <div>
                        <h5>{props.Info.name}</h5>
                        <h6>${props.Info.price}</h6>
                        
                    </div>
                    <span className='m-2 d-flex justify-content-around align-items-center'>X {props.Info.amount}</span>
              </div>
              <div className='col-5 d-flex  align-items-center'>
                     
                       <button className={`m-1 ${style.Btn} ${style.BtnMinus}`} onClick={DecreaseFunc} >-</button>
                       <button className={`m-1 ${style.Btn} ${style.BtnPlus}`} onClick={IncreaseFunc}>+</button>
                       <button className={`m-1 ${style.Btn} ${style.BtnDelete}`} onClick={DeleteItem}>X</button>
                      
                       
              </div>
        </div>
    )
}