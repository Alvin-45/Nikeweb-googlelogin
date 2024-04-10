import React from 'react'
import s1 from '../assets/sh1.webp';
import b4 from '../assets/s4.png';


import shoe from '../assets/banner.png'
import About from './About';
import Header from './Header';

function Nike() {
  return (
    <>
    <div className="fullbody">
        <Header/>
        <div className="bdy bg-light" style={{width:'93%'}}>
          
      <div className="row" id='home'>
        <div className="col-8">
            <h1 style={{fontSize:'75px'}}>Summer <br />Collections</h1>
            <h2 className="text-danger" style={{fontSize:'55px'}}>2024</h2>
            <p>Find your shoes from our various collection of shoes</p>
            <button className="btn btn-danger">Shop More <i className="fa-solid fa-arrow-right"></i></button>
            <div className='d-flex justify-content-around mt-5 w-75'>
                <a className='link' href='#'>
                    <div className="bg-dark rounded d-flex justify-content-evenly" style={{width:'190px',border:'2px solid',height:'100px'}}>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-LwCxXJ.png" style={{width:'90px'}} alt="shoe" />
                        <p className="text-light pt-4 fw-bolder text-center">NIKE JORDAN</p>
        
                    </div>
                </a>
                <a href='#' className='link'>
                    <div className="bg-dark rounded d-flex justify-content-evenly" style={{width:'190px',border:'2px solid',height:'100px'}}>
                        <img src={s1} style={{width:'90px'}} alt="shoe" />
                        <p className="text-light  pt-4 fw-bolder text-center">Nike Dunk High </p>
        
                    </div>
                </a>
                <a className='link' href='#'>
                    <div className="bg-dark rounded d-flex justify-content-evenly" style={{width:'190px',border:'2px solid',height:'100px'}}>
                        <img src={b4} style={{width:'90px'}} alt="shoe" />
                        <p className="text-light  pt-4 fw-bolder text-center">Mercurial Football Shoes</p>
        
                    </div>
                </a>
            </div>
        </div>
        <div className="col"  style={{position:'relative'}}>
            <div className="bg1 rounded" style={{position:'absolute',zIndex:'10',width:'390px',height:'400px'}}>
                <h1 className="text-light hd1 text-center">NIKE</h1>
                <div className='text-end' style={{marginTop:'150px'}}>
                    <p className="fw-bolder me-2">NIKE JORDAN</p>
                    <h5 className="text-danger me-4 fw-bolder ">₹1200</h5>
                </div>
            </div>
            <img src={shoe} alt="" className='ss1'  style={{position:'absolute',zIndex:'25',marginTop:'60px',width:'350px'}}/>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
            <h5 className="text-danger">20k+ <span className="text-dark">Orders Completed</span></h5>
        </div>
        <div className="col">
            <h5 className="text-danger">40k+ <span className="text-dark">Regular Visitors</span></h5>
        </div>
        <div className="col">
            <h5 className="text-danger">15k+ <span className="text-dark">Happy Customers</span></h5>
        </div>
      </div>
      
        </div>
        <About/>
    </div>
    
    </>
  )
}

export default Nike