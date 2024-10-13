'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"
import './scss/mainPage.scss'
//import WebApp from 'telegram-mini-app'
import { TelegramWebAppContainer } from '@telegram-web-app/core'



export default function Home() {

  let telegram = null
   
  useEffect(()=>{

    telegram = new TelegramWebAppContainer()    
    telegram.WebApp.ready()
    
  },[telegram])


 
  //telegram.WebApp.sendData(nav.en)
  return <main>
    <h1>tasks</h1>
  </main>
}
