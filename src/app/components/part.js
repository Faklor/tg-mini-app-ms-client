import '../scss/part.scss'
import Image from 'next/image'

//--------components------------
import UpdateCountPart from './updateCountPart'

export default function Parts({_id,name,catagory,contact,count,manufacturer,sellNumber,serialNumber,sum}){
    
    return <div className={count !== 0? 'part': 'part none'}>
        <Image src={require(`@/res/catagoryParts/${catagory}.svg`)} width={35} height={35} priority={false} alt={name}/>
        <p>{name}</p>
        
        <UpdateCountPart count={count} _id ={_id}/>
        
    </div>
}