import '../scss/slyder_category.scss'
import Image from 'next/image'
import { useRef } from 'react'
//-----redux----------
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/store/slice/category'

//-------res----------
import defaultImgCategory from '@/res/catagoryParts/Все.svg'

export default function SlyderCategory(){
    
    //refs
    const defaultRef = useRef(null)
    const arrayRefs = useRef([])
    //redux
    const dispatch = useDispatch()
    const parts = useSelector(state=> state.partsRedux.parts)


    return <div className='slyder_category'>
        <div className='category active' onClick={()=>{
            defaultRef.current.classList.add('active')
            //redux
            dispatch(setCategory(''))
            //-----
            arrayRefs.current.forEach(el=>{
                el.classList.remove('active')
            })
            
            }} ref={defaultRef}>
            <Image src={defaultImgCategory} width={68} height={68} alt={'defaultImgCategory'} priority={true}/>
            <p>Все</p>
        </div>

        {parts.map((el, index)=>{

            return <div className='category' key={index} onClick={()=>{
                defaultRef.current.classList.remove('active')
                arrayRefs.current.forEach(item=>{
                    
                    
                    if(el.catagory === item.innerText){
                        item.classList.add('active')
                        //redux
                        dispatch(setCategory(item.innerText))
                        //-----
                    }
                    else{
                        item.classList.remove('active')
                    }
                })
            }} ref={el=>arrayRefs.current[index] = el}>
                <Image src={require(`@/res/catagoryParts/${el.catagory}.svg`)} width={68} height={68} alt={el.catagory} priority={false}/>
                <p>{el.catagory}</p>
            </div>
        })}
    </div>
}