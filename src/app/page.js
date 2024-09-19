'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios"
import WebApp from 'telegram-mini-app'

export default function Home() {

  const [data, setData] = useState('hello')

  
  

  return (
    <div>
      <main>
        
        <h1 style={{color:'red'}}>{data}</h1>
        <button onClick={()=>setData(WebApp.initData)}>init</button>
        <button onClick={()=>setData(WebApp.sendData('asf'))}>send</button>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
