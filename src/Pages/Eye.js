import React from 'react'
import EyePost from '../Comp/EyePost'

export default function Eye() {
  return (
    <div>
      <div className='row'>
        {EyePost.map((p) => (
          <div className='col-lg-4 img-thumbnail'>
            <img src={p.img} className='w-100' />
            <h5>{p.title}</h5>
            <p className='text-success'>{p.desc}</p>
            <p className='btnn text-success'><i class="bi bi-bag-check-fill"></i> <a href=''>cart</a></p>

          </div>
        ))}

      </div>
    </div>
  )
}
