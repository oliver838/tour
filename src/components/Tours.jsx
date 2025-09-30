import React from 'react'
import { useState } from 'react'
import { getData } from '../utils'
import { useEffect } from 'react'
import { Tourcard } from './Tourcard'

export const Tours = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        getData(setData)
    },[])
    console.log(data);
  return (
    <div className='tour-container'>
      {data && data.map(obj=>
       <Tourcard key={obj.id} {...obj}/>
      )}
    </div>
  )
}
