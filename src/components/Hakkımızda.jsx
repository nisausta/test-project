import React,{useState} from 'react'

const Hakkımızda = () => {
    const[title,setTitle]=useState()
    return (
        
        <div className='hakkımızda'>

            <div><h1 > {title} HAKKINDA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta reiciendis dolorem corporis. Error odio autem saepe voluptas iusto vero cum inventore praesentium non nostrum? Cum culpa commodi nostrum veritatis?</p>
            <a className='btn' onClick = {() =>setTitle("NİSA")} >TIKLA</a>
            </div>
        </div>
    )
}

export default Hakkımızda