import React from 'react'
import ShavingNeed from '../Comp/ShavingNeed'

export default function Shaving() {
  return (
    <div>
    <div className='row'>
      {ShavingNeed.map((x) => (
        <div className='col-lg-4 img-thumbnail'>
          <img src={x.img} className='w-100' />
          <h5>{x.title}</h5>
          <p className='text-success'>{x.desc}</p>
          <p className='btnn text-success'><i class="bi bi-bag-check-fill"></i> <a href=''>cart</a></p>

        </div>
      ))}

    </div>
  </div>
  )
}
