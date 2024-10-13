import dbConnet from "@/lib/db"
import Part from '@/models/parts'
import { NextRequest, NextResponse } from "next/server"

export async function POST(req,res){
    await dbConnet()


    try{
        const {_id,count} = await req.json();
        
        
        const updateCountPart = await Part.findOneAndUpdate({_id},{count:count})

        return NextResponse.json(updateCountPart)
    }
    catch(e){
        return NextResponse.json(e.message)
    }

}