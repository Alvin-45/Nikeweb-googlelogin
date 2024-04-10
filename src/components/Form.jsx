import React, { useState, useEffect } from 'react';
import Footer from './Footer';

function Form() {
  const [emailid, setEmailid] = useState('');

  useEffect(() => {
    const storedEmailid = sessionStorage.getItem('userEmail');
    if (storedEmailid) {
      setEmailid(storedEmailid);
    }
  }, []); 
  return (
    <>
      <div id='connect' className="form bg-dark text-center pb-3" style={{ width: '93%' }}>
        <h2 className="text-light pt-5 fw-bolder" style={{ letterSpacing: '10px' }}>Join Our <span className="text-danger">News Letters</span></h2>
        <p className="text-light" style={{ width: '50%', margin: 'auto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur voluptas quam minus maiores quidem earum nostrum voluptate! Ipsum modi praesentium temporibus fugit exercitationem ducimus, dignissimos commodi distinctio quidem? Error, quod!</p>
        <p className="text-danger fw-bolder p-4">{emailid}</p>
        <div className='d-flex justify-content-center mt-4'>
          
          <input type="text" className='rounded' placeholder='Share your views..' style={{ width: '400px', height: '50px' }} />
          <button className="btn btn-danger" style={{ width: '45px', height: '50px' }}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;
