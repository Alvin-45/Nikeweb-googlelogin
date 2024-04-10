import React from 'react'
import logo from '../assets/nike.png'

function Footer() {
  return (
    <>
    <div className="footer bg-light p-5 d-flex justify-content-center flex-wrap" style={{width:'93%'}}>
        <div className="row container">
            <div className="col-sm-6">
            <img src={logo} alt="" width={'90px'} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate molestiae? Aliquid excepturi facilis hic explicabo nemo</p>
            <div className="d-flex justify-content-around align-items-center w-50">
                <div className="rounded bg-danger  icn" style={{width:'28px'}}>
                <i className="fa-brands fa-facebook-f ms-2" style={{color: "#f7f7f7"}}></i>
                </div>
                <div className="d-flex justift-content-evenly align-items-center">
                <div className="rounded bg-danger icn" style={{width:'28px'}}>
                <i className="fa-brands fa-instagram    ms-2" style={{color: "#f7f7f7"}}></i>
                </div>
            </div>
            <div className="d-flex justift-content-evenly align-items-center ">
                <div className="rounded bg-danger  icn" style={{width:'28px'}}>
                <i className="fa-brands fa-twitter ms-2" style={{color: "#f7f7f7"}}></i>
                </div>
            </div>
            <div className="d-flex justift-content-evenly align-items-center">
                <div className="rounded bg-danger icn"  style={{width:'28px'}}>
                <i className="fa-regular fa-envelope ms-2" style={{color: "#f7f7f7"}}></i>
                </div>
            </div>
            </div>
            
            </div>
            <div className="col-sm-3 text-center mt-3">
                <h5 className="fw-bolder mb-4">Quick Links</h5>
                <ul style={{listStyle:'none'}}>
                    <li className='mb-2'><a href='#home' className='link'>Home</a></li>
                    <li className='mb-2'><a href='#about' className='link'>About</a></li>
                    <li className='mb-2'><a href='#collection' className='link'>Collection</a></li>
                    <li className='mb-2'><a href='#connect' className='link'>Connect</a></li>
                    
                </ul>
            </div>
            <div className="col-sm-3 text-center">
            <h5 className='mb-3 fw-bolder' id='contact'>Contact</h5>
            <p><i className='fa-solid fa-location' style={{color:'red'}}></i> &nbsp;24th Street,Tokyo</p>
          <p><i className='fa-solid fa-phone' style={{color:'red'}}></i> &nbsp; 244-5333-7783</p>
          <p><i className='fa-regular fa-envelope' style={{color:'red'}}></i> &nbsp;hello@dm.com</p>
          
          
        
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer