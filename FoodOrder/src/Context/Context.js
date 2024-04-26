import React, { useState } from 'react'

export const Context=React.createContext({
     SelectedItem:[],
     TotalPrice:0,
     FlageModal:false,
     onAddFoodItem:(item)=>{},
     onFlageHandler:(flage)=>{},
     onIncreaseAmountFood:(id)=>{},
     onDecreaseAmountFood:(id)=>{},
     onDeleteAllItems:()=>{},
     onDeleteItem:(id)=>{}
})

export const ContextProvider=(props)=>{
      const[SelectedItem,setSelectedItem]=useState([])
      const[TotalPrice,setTotalPrice]=useState(0)
      const[FlageModal,setFlageModal]=useState(false)

      const TotalHandlerItems=(Items)=>{
             let total=0
             Items.forEach(item => {
           
                  total=total+(item.amount*item.price)
             });
             setTotalPrice(total.toFixed(2))
             
      }
   
      const AddFoodItem=(item)=>{
          
          if(CheckNewItem(item)) {
            setSelectedItem([...SelectedItem,item])
            TotalHandlerItems([...SelectedItem])
          }
        
      } 
  
     const CheckNewItem=(newItem)=>{
            let flage=true
            SelectedItem.forEach((item)=>{
                
                  if(item.id===newItem.id) flage=false
            })

            return flage
     }
    const FlageHandler=(flage)=>{
            setFlageModal(flage)
    }
    const IncreaseAmountFood=(id)=>{
           SelectedItem.forEach(item=>{
               if(item.id===id){
                   item.amount++
               }
           })
           TotalHandlerItems([...SelectedItem])
    }

    const  DecreaseAmountFood=(id)=>{
        SelectedItem.forEach(item=>{
            if(item.id===id){
                item.amount--
            }
        })
        TotalHandlerItems([...SelectedItem])
        }

   const DeleteAllItems=()=>{
       setSelectedItem([])
   }
   const DeleteItem=(id)=>{
       let a=SelectedItem.filter(item=>{
           if(item.id!==id) return item
            })
       setSelectedItem([...a])
       TotalHandlerItems([...SelectedItem])
   }

       return(
           <Context.Provider value={{
               SelectedItem:SelectedItem,
               TotalPrice:TotalPrice,
               FlageModal:FlageModal,
               onAddFoodItem:AddFoodItem,
               onFlageHandler:FlageHandler,
               onIncreaseAmountFood:IncreaseAmountFood,
               onDecreaseAmountFood:DecreaseAmountFood,
               onDeleteAllItems:DeleteAllItems,
               onDeleteItem:DeleteItem
               }}>
                    {props.children}
           </Context.Provider>
       )
}