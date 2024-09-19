'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios"
//import WebApp from 'telegram-mini-app'
import { TelegramWebAppContainer } from '@telegram-web-app/core'

export default function Home() {

  const [data, setData] = useState('hello')
  let telegram = null
   
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
        
        <h1 style={{color:'red'}}>{data}</h1>
        <button onClick={()=>telegram.WebApp.sendData('fuck')}>send</button>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
