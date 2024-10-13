import '../scss/addPartBt.scss'
import Image from 'next/image'

//------------redux----------------
import { useDispatch } from 'react-redux'

import { setVisibleAddBlock } from '@/store/slice/category'

export default function AddPart(){

    //redux
    const dispatch = useDispatch()
    
    return <button className="addPartBt">
        <Image src={require('@/res/components/Add.svg')} width={40} height={40} alt='addPartButton' onClick={()=>dispatch(setVisibleAddBlock())} priority={false}/>
    </button>
}