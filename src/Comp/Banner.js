import React from 'react'
import CatBanner from './CatBanner'
import Post from './Post'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Eye from '../Pages/Eye';
import Lips from '../Pages/Lips';
import Accessories from '../Pages/Acc'
import Shaving from '../Pages/Shaving';
import Details from '../Pages/Details';

export default function Banner() {
  return (
    <div className='con1 '>
      <div className='row'>
        <div className='col-lg-3'>
          <div className='bl pos'>
            <ul>
              {CatBanner.map((a) => (
                <li className='fw-semibold'><Link to={`/cat/${a.id}`}><img src={a.cateImg} width="25" />{a.cateName}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-lg-9'>
          <div className='br'>
          <div className='row'>
            {Post.map((d) => (
              <div className='col-lg-4 img-thumbnail pp'>
                <img src={d.img} className='w-100' />
                <Link className='bnr' to={`/title/${d.id}`}><h5>{d.title}</h5></Link>
                <p className='text-success'>{d.desc}</p>
                <p className='btnn text-success'><i class="bi bi-bag-check-fill"></i> <a href=''>cart</a></p>
              </div>
            ))}

          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
