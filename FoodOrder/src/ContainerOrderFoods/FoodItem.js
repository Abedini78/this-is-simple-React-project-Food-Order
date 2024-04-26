import { useContext, useState } from 'react'
import { Context } from '../Context/Context'

import style from './FoodItem.module.css'



export const FoodItem=(props)=>{
    const[AmountFood,setAmountFood]=useState(1)
    const changeAmountHandler=(e)=>{
        setAmountFood(e.target.value)
    }
    const ctx=useContext(Context)
  
    const AddItem=()=>{
        const obj={
            id:props.id,
            name:props.name,
            price:props.price,
            amount:Number(AmountFood)
        }
       ctx.onAddFoodItem(obj)
    }  

    return(
        <div className={style.BoxFood}>
              <div className='col-6'>
                 <h3>{props.name}</h3>
                 <h5>${props.price}</h5>
              </div>
              <div>
                   <h6>Amount : </h6>
                   <div className={style.BoxInput}>
                      <button onClick={AddItem}  id={props.id}>+ADD</button>
                      <input min='1' onChange={changeAmountHandler} type='number' value={AmountFood}></input>
                   </div>
              </div>
        </div>
    )
}