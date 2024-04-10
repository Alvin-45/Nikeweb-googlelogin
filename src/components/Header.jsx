import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../assets/nike.png';
import {Button,NavDropdown} from 'react-bootstrap';
import { googleLogout } from '@react-oauth/google';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSignOut = () => {
    googleLogout();
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");
    setUserName('');
    toast.info("Signing Out");
    navigate('/');
  };

  useEffect(() => {
    if (sessionStorage.getItem("userName")) {
      const storedUserName = sessionStorage.getItem('userName');
      setUserName(storedUserName);
    }
  }, []);

  return (
    <>
      <div className='head'>
        {/* <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="" width={'150px'} height={'50px'} /></Navbar.Brand>
            <Nav className="m-auto">
              <Nav.Link id='n1' href="#home">Home</Nav.Link>
              <Nav.Link id='n2' href="#about">About</Nav.Link>
              <Nav.Link id='n4' href="#collection">Collections</Nav.Link>
              <Nav.Link id='n3' href="#testimonials">Testimonials</Nav.Link>
            </Nav>
            {sessionStorage.getItem('userName') ?
              <div className='d-flex justify-content-around name' style={{ border: '1px solid', paddingTop: '15px',color:'white',width:'60px',height:'60px' }}>
                
                <p className="fw-bolder">{userName.split(" ")[0]}</p> 
              </div> :
              <Button id='btn' variant="outline-secondary" onClick={() => navigate('/login')}>Login </Button> 
            }
            {sessionStorage.getItem('userName') &&
              <Button id='btn' variant="outline-secondary" onClick={handleSignOut}>Sign Out </Button>
            }
          </Container>
        </Navbar> */}
        {/* new navvvvvvvvvvvvvvvvvv */}
        <Navbar expand="lg" className="bg-light head">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" width={'150px'} height={'50px'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link id='n1' href="#home">Home</Nav.Link>
              <Nav.Link id='n2' href="#about">About</Nav.Link>
              <Nav.Link id='n4' href="#collection">Collections</Nav.Link>
              <Nav.Link id='n3' href="#testimonials">Testimonials</Nav.Link>
            {/* <NavDropdown title={userName.split(" ")[0]} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>{sessionStorage.getItem('userName') ?
              <div className='d-flex justify-content-around name' style={{ border: '1px solid', paddingTop: '15px',color:'white',width:'60px',height:'60px' }}>
                
                <p className="fw-bolder">{userName.split(" ")[0]}</p> 
              </div> :
              ''
            }
        </Navbar.Collapse>
        {sessionStorage.getItem('userName') ?
              '':
              <Button id='btn1' variant="outline-secondary" onClick={() => navigate('/login')}>Login </Button> 
            }
            {sessionStorage.getItem('userName') &&
              <Button id='btn1' variant="outline-secondary" onClick={handleSignOut}>Sign Out </Button>
            }
      </Container>
    </Navbar>
      </div>
    </>
  );
}

export default Header;
