'use client'
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios"
import Image from "next/image";
import '../scss/header.scss'

import { ReactSVG } from "react-svg";
//----------res---------------
import taskSvg from '@/res/nav/task.svg'
import objectSvg from '@/res/nav/object.svg'
import warehouseSvg from '@/res/nav/warehouse.svg'



export default function Header(){
    //next
    const router = useRouter()
    const pathname = usePathname()
    //ref
    const navRef = useRef([])
    //react
    const [data, setData] = useState('hello')

    //default
    const navMenu = [{en:'task',ru:'Задачи',img:taskSvg.src},{en:'object',ru:'Обьект',img:objectSvg.src},{en:'warehouse',ru:'Склад',img:warehouseSvg.src}]


    //axios
    async function getWorkers() {
      return await axios.get('/api')
    }
    
    async function getTeches() {
      return await axios.get('/api/teches')
    }
      

    useEffect(()=>{

      //-----svg-----
      
      //-------------

      getTeches()
      .then(res=>{
        setData(res.data)
      })
      .catch(e=>{
        console.log(e)
      })
        
    },[])

    return <header>
        {navMenu.map((nav,index)=>{
          //start animate active element navMenu
          if(navRef.current.length !== 0){
            navRef.current.forEach((el,index)=>{
              if(`/${el.children[0].attributes[0].value}` === pathname){
                navRef.current[index].classList.add('active')
              }
              else if('/' === pathname){
                navRef.current[0].classList.add('active')
              }
            })
          }
          
          
          //render
          return <div key={index} onClick={()=>{
            
            navRef.current.forEach((el,index)=>{
              if(el.innerText === nav.ru){
                el.classList.add('active')
              }
              else{
                el.classList.remove('active')
              }
            })

            if(nav.en === 'task'){
              return router.push(`/`)
            }

            return router.push(`/${nav.en}`)
          }} className="navItem" ref={(el)=>navRef.current[index] = el}>
            <ReactSVG src={nav.img} alt={nav.en} />
            <p>{nav.ru}</p>
          </div>
        })}
      
    </header>
}