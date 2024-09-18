'use client'
import Image from "next/image";
import styles from "./page.module.css"
import { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {

  const [data, setData] = useState('hello')

  // async function order(){
  //   return await axios.get('http://localhost:5000/api/teches')
  // }
  // useEffect(()=>{
  //   order()
  //   .then(res=>{
  //     setData(res.data)
  //   })
  // })
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <h1>{data}</h1>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
