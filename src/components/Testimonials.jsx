import React from 'react'
import { Card } from 'react-bootstrap';
import star from '../assets/star.png'
import Person1 from '../assets/p1.jpg'
import Person2 from '../assets/p2.jpg'
import Person3 from '../assets/p3.jpg'
import Form from './Form';

function Testimonials() {
  return (
    <>
    <div id='testimonials' className="testimonials p-3" style={{width:'93%'}}>
        <h2 className="text-center fw-bolder">What our <span className="text-danger">Client say</span> <br /> About Us</h2>
        <div className="card2 d-flex justify-content-evenly align-items-center flex-wrap" style={{marginTop:'150px'}}>
            <Card style={{ width: '28rem',borderRadius:'20px',height:'330px',marginBottom:'80px' }}>
          <Card.Img variant="top" src={Person1} style={{borderRadius:'50%',width:'130px',marginRight:'auto',marginTop:'-50px',height:'100px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Tony Stark</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            Nike is an iconic brand known for exceptional quality and style. Their innovative technologies like Nike Air and Flyknit deliver unmatched comfort and performance in footwear. Whether you're an athlete or a fashion enthusiast, Nike's products never fail to impress.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '28rem',borderRadius:'20px',height:'330px',marginBottom:'80px'  }}>
          <Card.Img variant="top" src={Person2} style={{borderRadius:'50%',width:'130px',marginRight:'auto',marginTop:'-50px',height:'100px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Bruce Wayne</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            Nike is synonymous with excellence, offering top-tier footwear that blends style and performance seamlessly. Their commitment to innovation shines through in every product, making them a go-to choice for athletes and trendsetters worldwide. With Nike, you're not just buying shoes; you're investing in quality, comfort, and iconic style.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '28rem',borderRadius:'20px',height:'330px',marginBottom:'80px'  }}>
          <Card.Img variant="top" src={Person3} style={{borderRadius:'50%',width:'130px',marginRight:'auto',marginTop:'-50px',height:'100px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Natasha Romanoff</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            Nike is a leading brand renowned for its high-quality footwear and innovative technologies. Their stylish designs and comfortable fit make them a favorite among athletes and fashion enthusiasts alike. With Nike, you can always expect top-notch performance and style.
            </Card.Text>
          </Card.Body>
        </Card>
        
            </div>

    </div>
    <Form/>
    </>
  )
}

export default Testimonials