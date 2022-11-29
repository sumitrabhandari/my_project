import React from 'react'
import Data from '../Comp/Data'

export default function Details() {
  return (
    <div className=' box4 text-center'>
        {Data.map((l)=>(
  <div className='row' >
    <div className='col-lg-4 '>
<img src={l.img} className='w-100' />
<p>1pc (s)</p>
</div>
<div className='col-lg-8 pt-5'>
<h3>{l.title}</h3>
<p>{l.desc}</p>
<h4 className='text-success fw-3'>{l.prc}</h4>
<p className='btn btn-success text-light'>{l.add}</p>
<p>49 pieces available</p>
</div>
</div>
    ))}
    </div>
  )
}
