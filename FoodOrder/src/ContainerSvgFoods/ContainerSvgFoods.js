import style from './ContainerSvgFoods.module.css'
import { Icon } from './Icon'


const ArrayClassIcons=[
    'fas fa-pizza-slice',
    'fas fa-bacon',
    'fas fa-cheese',
    'fas fa-drumstick-bite',
    'fas fa-egg',
    'fas fa-hamburger',
    'fas fa-hotdog',
    '	fas fa-ice-cream',
    'fas fa-pepper-hot',
    'fas fa-pizza-slice',
    'fas fa-bacon',
    'fas fa-cheese',
    'fas fa-drumstick-bite',
    'fas fa-egg',
    'fas fa-hamburger',
    'fas fa-hotdog',
    '	fas fa-ice-cream',
    'fas fa-pepper-hot',
    'fas fa-pizza-slice',
    'fas fa-bacon',
    'fas fa-cheese',
    'fas fa-drumstick-bite',
    'fas fa-egg',
    'fas fa-hamburger',
    'fas fa-hotdog',
    '	fas fa-ice-cream',
    'fas fa-pepper-hot',
]

export const ContainerSvgFoods=()=>{
    return(
        <div className={`container-fluid ${style.BoxSvg}`}>
                 {ArrayClassIcons.map((iconClass,index)=>{
                     return <Icon key={index} classIcon={iconClass}></Icon>
                 })}
                 
        </div>
    )
}

