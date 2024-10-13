import '../scss/blockAddPart.scss'

import { useEffect, useState } from 'react'
//---------redux-----------
import { useSelector } from 'react-redux'

export default function BlockAddPart(){

    //redux
    const visibleAddBlock = useSelector(state=>state.category.visibleAddBlock)
    const category = useSelector(state=>state.category.category)
    
    //default
    const partObj = {
        name:'',
        category:category,
        serialNumber:'',
        sellNumber:'',
        count:'',
        sell:'',
        manufacturer:'',
        contact:{
            name:'',
            link:''
        }
    }
    //react
    const [part, setPart] = useState(partObj)
    
    useEffect(()=>{
        setPart(partObj)
    },[category])

    

    return visibleAddBlock?<div className='blockAddPart'>
        <h2>Добавление запчасти</h2>
        <input type='text' defaultValue={part.category} placeholder='Категория*'/>
        <input type='text' defaultValue={part.name} placeholder='Название*'/>
        <input type='text' defaultValue={part.manufacturer} placeholder='Производитель'/>
        <input type='text' defaultValue={part.serialNumber} placeholder='Серийный номер'/>
        <input type='text' defaultValue={part.sellNumber} placeholder='Товарный номер'/>
        
        <input type='number' defaultValue={part.count} placeholder='Кол-во'/>
        <input type='number' defaultValue={part.sell} placeholder='Сумма'/>

        <h2>Контакты</h2>
        <input type='text' defaultValue={part.contact.name} placeholder='Имя'/>
        <input type='text' defaultValue={part.contact.link} placeholder='Ссылка'/>

        <button>ДОБАВИТЬ</button>
    </div>:<></>
}