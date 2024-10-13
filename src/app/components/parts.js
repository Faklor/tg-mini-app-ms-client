import '../scss/parts.scss'
//--------componet----------
import Part from '../components/part'

export default function Parts({array}){

   

    return <div className="parts">
        {
            array.map((el,index)=>{
                return <Part {...el} key={index}/>
            })
        }
    </div>
}