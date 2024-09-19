'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios"
import './scss/mainPage.scss'
//import WebApp from 'telegram-mini-app'
import { TelegramWebAppContainer } from '@telegram-web-app/core'



export default function Home() {

  const [data, setData] = useState('hello')
  let telegram = null

  const navMenu = [{en:'task',ru:'Задачи'},{en:'tech',ru:'Техника'},{en:'warehouse',ru:'Склад'}]
   
  useEffect(()=>{
    
    // if (typeof window !== "undefined") {
    //   // Client-side-only code
    //   // console.log(WebApp.initData)
    // }
    telegram = new TelegramWebAppContainer()    
    telegram.WebApp.ready()
    
  },[telegram])
  

  return (
    <div>
      <main>
        {navMenu.map((nav,index)=>{
          return <div key={index} onClick={()=>telegram.WebApp.sendData(nav.en)}>
            <Image src={require(`@/res/${nav.en}.svg`)} width={68} height={68} alt={nav.en}/>
            <p>{nav.ru}</p>
          </div>
        })}
        {/* <h1 style={{color:'red'}}>{data}</h1>
        <button onClick={()=>telegram.WebApp.sendData('fuck')}>send</button>
        <button onClick={()=>setData(telegram.WebApp.initData)}>init</button> */}
        
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
