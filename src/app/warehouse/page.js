'use client'
import '../scss/warehouse.scss'
import React from "react"
import { useState,useEffect } from 'react'
import axios from 'axios'
//--------redux---------
import { useDispatch,useSelector } from 'react-redux'
import { setParts } from '@/store/slice/partsArray'

//-----components-------
import SlyderCategory from '../components/slyder_category'
import Parts from '../components/parts'
import AddPart from '../components/addPart'
import Search from '../components/search'
import BlockAddPart from '../components/blockAddPart'

export default function WareHouse(){

    //redux
    const dispatch = useDispatch()
    const nowCategory = useSelector(state => state.category.category)
    const parts = useSelector(state=> state.partsRedux.parts)
    const searchParts = useSelector(state=>state.partsRedux.searchParts)
    //react
    //const [parts, setParts] = useState([])

    useEffect(()=>{
        getParts()
        .then(res=>{
            dispatch(setParts(res.data))
            //setParts(res.data) 
               
        })
        .catch(e=>{
            console.log(e)
        })
    },[])


    //axios
    async function getParts() {
       return await axios.get('/api/parts')
    }

    //console.log(nowCategory)

    return <main className="warehouse">
        <SlyderCategory/>
        <div className='controlls'>
            <Search />
            <AddPart/>
        </div>
        <div className='content'>
            <BlockAddPart/>

            {nowCategory === ''?
                <Parts array={searchParts}/>
            :
                <Parts array={searchParts.filter(item=>item.catagory === nowCategory)}/>
            }
        </div>
        
        
    </main>
}