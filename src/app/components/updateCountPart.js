'use client'
import '../scss/updateCountPart.scss'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
//--------redux---------
import { useDispatch } from 'react-redux'
import { setParts } from '@/store/slice/partsArray'

export default function UpdateCountPart({count,_id}){

    //redux
    const dispatch = useDispatch()
    //react
    let [nowCount, setNowCount] = useState(count)

    async function setCountPart(_id,count){
        return await axios.post('/api/parts/updateCountPart',{_id:_id,count:count})
    }

    async function getParts() {
        return await axios.get('/api/parts')
    }

    return <div className='count'>
        <input type='number' value={count} onChange={(e)=>setNowCount(Number(e.target.value))}/>
        <div className='controllers'>
            <Image src={require('@/res/components/Add.svg')} width={10} height={10} alt='addCount' onClick={()=>{
                setNowCount(nowCount+1)
                setCountPart(_id,nowCount+1)
                getParts().then(res=>dispatch(setParts(res.data)))
                }}/>
            <Image src={require('@/res/components/remove.svg')} width={10} height={10} alt='deleteCount' onClick={()=>{
                nowCount === 0? '':
                setNowCount(nowCount-1)
                setCountPart(_id,nowCount-1)
                getParts().then(res=>dispatch(setParts(res.data)))
                }}/>  
        </div>
        
    </div>
}