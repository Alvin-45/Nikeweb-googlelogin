import React from 'react'
import logo from '../assets/nike.png'
import Collections from './Collections'
import ab1 from '../assets/ab1.png'
import ab2 from '../assets/ab2.png'
import ab3 from '../assets/ab3.png'
function About() {
  return (
    <>
    <div id='about' className="about pt-5 pb-5" style={{width:'93%'}}>
        <h3 className="text-center pb-5 fw-bolder">What we <span className="text-danger">offer</span></h3>
        <div className="cards d-flex justify-content-around align-items-center flex-wrap">
            <div className="box bg-light text-center" style={{width:'250px'}}>
                <img src={ab1} alt="24x7" />
                <h5 className="text-warning">24x7 Support</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis, velit, numquam laborum vero voluptate nam voluptatum maiores ratione quaerat praesentium odio? Nihil minima consequuntur molestias dolorem, illo mollitia neque?</p>
                <img src={logo} alt="" style={{width:'50px'}}/>
            </div>
            <div className="box bg-light text-center"  style={{width:'250px'}}>
                <img src={ab2} alt="24x7" />
                <h5 className="text-warning">Cash Back</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis, velit, numquam laborum vero voluptate nam voluptatum maiores ratione quaerat praesentium odio? Nihil minima consequuntur molestias dolorem, illo mollitia neque?</p>
                <img src={logo} alt="" style={{width:'50px'}}/>
            </div>
            <div className="box bg-light text-center"  style={{width:'250px'}}>
                <img src={ab3} alt="24x7" />
                <h5 className="text-warning">Monthly Offer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis, velit, numquam laborum vero voluptate nam voluptatum maiores ratione quaerat praesentium odio? Nihil minima consequuntur molestias dolorem, illo mollitia neque?</p>
                <img src={logo} alt="" style={{width:'50px'}}/>
            </div>
        </div>
    </div>
    <Collections/>
    </>
  )
}

export default About