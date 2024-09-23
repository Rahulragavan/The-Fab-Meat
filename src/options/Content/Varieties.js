import React from 'react'
import './Varieties.css'
import {Link} from 'react-router-dom';
const varieties = () => {
  return (
    <div>
      <div className='container-fluid-varieties'>
        <div className='row'>

        
            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='chicken'>
               <Link className='text-link' to="/Chicken">
                <div className='shadow'>
                <div className='content-varieties'>Chicken</div>
                </div>
                </Link>
               </div>
            </div>
           

            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='Mutton'>
               <Link className='text-link' to="/Mutton">
                <div className='shadow'>
                <div className='content-varieties'>Mutton</div>
                </div>
                </Link>
               </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='Fish'>
               <Link className='text-link' to="/Fish">
                <div className='shadow'>
                <div className='content-varieties'>Fish</div>
                </div>
                </Link>
               </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='Eggs'>
               <Link className='text-link' to="/Eggs">
                <div className='shadow'>
                <div className='content-varieties'>Eggs</div>
                </div>
                </Link>
               </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='Cold-Cuts'>
               <Link className='text-link' to="/Fish">
                <div className='shadow'>
                <div className='content-varieties'>Cold Cuts</div>
                </div>
                </Link>
               </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 collom'>
               <div className='Ready-to-cook'>
               <Link className='text-link' to="/Ready-to-cook">
                <div className='shadow'>
                <div className='content-varieties'>Ready to cook</div>
                </div>
                </Link>
               </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default varieties
