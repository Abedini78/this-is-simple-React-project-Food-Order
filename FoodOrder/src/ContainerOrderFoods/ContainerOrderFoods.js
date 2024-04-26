import style from './ContainerOrderFoods.module.css'
import { FoodItem } from './FoodItem'

const ListOfFoodOrde=[
    {id:0,name:'Sushi',price:22.99},
    {id:1,name:'Schnitzel',price:16.5},
    {id:2,name:'Barbecue Burger',price:12.99},
    {id:3,name:'Green Bowl',price:18.67},
]

export const ContainerOrderFoods=()=>{
    return(
        <div className={`m-1 row ${style.Box}`}>
             <div className={`col-xs-11 col-sm-11 col-md-10 mx-auto ${style.BoxOrders}`}>
                 {ListOfFoodOrde.map(food=>{
                     return <FoodItem key={food.id} id={food.id} name={food.name} price={food.price}></FoodItem>
                 })}
                    
                  
             </div>
        </div>
    )
}