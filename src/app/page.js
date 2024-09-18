'use client'
import Image from "next/image";
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
    <div>
      <main>
        
        <h1 style={{color:'red'}}>{data}</h1>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
