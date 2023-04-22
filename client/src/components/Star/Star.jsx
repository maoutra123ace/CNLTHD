import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
function Star({rating}) {
    const rate = Math.round(rating)
    return (
    <div>
    {
        [...Array(5)].map((_,i)=>{
        return  (<span key={i}>{rate > i ?(<AiFillStar/>):(<AiOutlineStar />)}</span>)
        })
    }
        
    </div>
  )
}

export default Star