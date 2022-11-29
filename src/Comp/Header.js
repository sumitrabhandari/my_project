import React from 'react'

export default function Header() {
  return (
    <div className='container-fluid py-5 text-center'>
      <img className='container-fluid position border-bottom' src='https://wallpaperaccess.com/full/1190372.jpg'/>
      <div className='con pt-5'>
      <h1 className='fw-bold font '>Branded & imported makeups</h1>
<p className='py-3 fs-5' >Easiest and cheapest way to get your branded & imported makeups</p>
<form className="d-flex " role="search">
  <input className="form-control me-0   botton" type="search" placeholder="Search your products from here" aria-label="Search" />
  <button className="btn btn-success w-10 fw-semibold" type="submit"><i class="bi bi-search"></i> Search</button>
</form>
<div className='box1 bg-success text-light'><i class="bi bi-bag-check"></i>0 item
<a href='' className='btn btn-light text-success'>$ 0.00</a>
</div>
</div>
</div>

  )
}
