import React from 'react'
import AccData from '../Comp/AccData'

export default function Acc() {
    return (
        <div>
          <div className='row'>
            {AccData.map((q) => (
              <div className='col-lg-4 img-thumbnail'>
                <img src={q.img} className='w-100' />
                <h5>{q.title}</h5>
                <p className='text-success'>{q.desc}</p>
                <p className='btnn text-success'><i class="bi bi-bag-check-fill"></i> <a href=''>cart</a></p>
    
              </div>
            ))}
    
          </div>
        </div>
      )
    }
    
   