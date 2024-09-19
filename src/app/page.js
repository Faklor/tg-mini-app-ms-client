'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {

  const [data, setData] = useState('hello')
  let tg = window.Telegram.WebApp

  
  

  return (
    <div>
      <main>
        
        <h1 style={{color:'red'}}>{data}</h1>
        <button onClick={()=>tg.sendData("Some data from Mini App")}>send</button>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
