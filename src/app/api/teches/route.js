import dbConnet from "@/lib/db"
import Tech from '@/models/tech'
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    await dbConnet()


    try{
        const tech = await Tech.find({})

        return NextResponse.json(tech)
    }
    catch(e){
        return NextResponse.json(e.message)
    }

}