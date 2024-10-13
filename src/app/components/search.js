import '../scss/search.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

//-------redux------------
import { useSelector, useDispatch } from 'react-redux'
import { searchWorld } from '@/store/slice/partsArray' 

export default function Search(){

    //redux
    const dispatch = useDispatch()
    const parts = useSelector(state=>state.partsRedux.parts)
    //react
    const [search, setSearch] = useState('')
    



    return <div className="search">
        <Image src={require('@/res/components/search.svg')} width={40} height={40} alt='search' priority={false}/>
        <input type='text' defaultValue={search} onChange={e=>{
            setSearch(e.target.value)
            //перебор массива, поиск по массиву 
            let oldParts = parts.slice()
            oldParts = oldParts.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            
            dispatch(searchWorld(oldParts))  
            
        }} placeholder='Поиск'/>
    </div>
}