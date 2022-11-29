import React from 'react'
import LipsData from '../Comp/LipsData'

export default function Lips() {
    return (
        <div className='row'>
            {LipsData.map((l) => (
                <div className='col-lg-4 img-thumbnail pp'>
                    <img src={l.img} className='w-100' />
                    <h5>{l.title}</h5>
                    <p className='text-success'>{l.desc}</p>
                    <p className='btnn text-success'><i class="bi bi-bag-check-fill"></i> <a href=''>cart</a></p>

                </div>
            ))}
        </div>
    )
}
