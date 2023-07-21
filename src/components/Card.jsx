import React, { useState } from 'react'


const Card = () => {

const[title,setTitle]=useState([])

const cardItems= [
    {
        name:"Web Hizmetleri",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis iure aut neque ullam autem!"
    }, {
        name:"Tasarım Hizmetleri",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis iure aut neque ullam autem!"
    }, {
        name:"Mobil Hizmetleri",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis iure aut neque ullam autem!"
    }
]
    return (
        <div className='card'>
        {
            cardItems.map((value,index )=>{

                return(
                    <div key={index}> <h3>{value.name} {title}</h3>
                    
                    <div><p>{value.des}</p></div>

                    <a className='btn' onClick={()=>{setTitle(index)}}>Tıkla</a>
                    
                    
                     </div>
                )
            })
        }
    
 
            
         </div>

    )
}

export default Card