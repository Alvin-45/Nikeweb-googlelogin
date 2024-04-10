
import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/nike.png';


function LoginPage() {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [userInputs, setUserInputs] = useState({ username: "", email: "", password: "" })
    console.log(userInputs);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault()

        const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
        const minLength = 8;

        if (userInputs.email && userInputs.password) {
            if (!emailRegex.test(userInputs.email)) {
                toast.warning("Enter a valid Gmail address.");
                return;
            }

            if (userInputs.password.length < minLength) {
                toast.warning("Password must be at least 8 characters long.");
                return;

            }
            if (!userInputs.username) {
                toast.warning("Enter a valid UserName");
                return;
            }
            if (emailRegex.test(userInputs.email) && userInputs.password.length >= minLength) {
                toast.success("Login Successfull");
                
            }
            if (userInputs.username) {
                sessionStorage.setItem('userName', userInputs.username);


            }
            if (userInputs.email) {
                sessionStorage.setItem('userEmail', userInputs.email);

            }
            // sessionStorage.setItem('userEmail', userInputs.email);
            setTimeout(() => {
                navigate('/')
            }, 2000)
            setUserInputs({ email: '', password: '' });

        }
        else {
            toast.warning("Please fill form Completely")
        }
    }

    return (
        <>
           <div className='lfull' style={{ height: '100vh' }}>
                <div className="mainDiv" >
    
                    <div className='brd2'>
                        <div className="row ">
                            <div className="col-lg-6">
                                <img src="https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/tpqid8vgfey6m4ke86te/123-joyride-cdp-apla-xa-xp.jpg" width={'100%'} height={'613px'} className='imgbdr'></img>
                            </div>
        
                            <div className="col-lg-6">
                                <div id='brdr' className="d-flex flex-column align-items-center ">
        
                                    <img src={logo} alt="" />
        
        
                                    <Form>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ fontFamily: 'PT Sans' }}>Username</Form.Label>
                                            <Form.Control style={{ borderColor: '#2b2b2b' }} type="text" placeholder="Enter your username" value={userInputs.username} onChange={e => setUserInputs({ ...userInputs, username: e.target.value })} />
                                        </Form.Group>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ fontFamily: 'PT Sans' }}>Email</Form.Label>
                                            <Form.Control style={{ borderColor: '#2b2b2b' }} type="email" placeholder="Enter your email" value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} />
                                        </Form.Group>
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontFamily: 'PT Sans' }}>Password</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter your password"
                                                    style={{ borderColor: '#2b2b2b' }}
                                                    value={userInputs.password}
                                                    onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
                                                />
        
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>
                                    <div className="forgetDiv d-flex justify-content-between align-items-center w-50 mt-1">
                                        <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                            <input type="checkbox" className="me-2" />
                                            Remember me
                                        </label>
                                        <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                            Forget password?
                                        </label>
        
                                    </div>
        
                                    <div className="btnDiv w-100 justify-content-center d-flex">
                                        <button onClick={handleLogin} className='w-25 rounded' style={{ backgroundColor: '#2b2b2b', color: 'white', height: '40px' }}>Sign In</button>
        
                                    </div>
                                    <div className="btnDiv w-100  justify-content-center d-flex mt-1 " >
        
                                        <GoogleLogin size='40px'
        
                                            onSuccess={credentialResponse => {
                                                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                                console.log(credentialResponseDecoded);
                                                sessionStorage.setItem("userName", credentialResponseDecoded.name);
                                                setTimeout(() => {
                                                    navigate('/')
                                                }, 2000)
                                                toast.success("Login Success")
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />
        
                                    </div>
        
                                    <div className="SignUpDiv">
                                        <p style={{ fontFamily: 'PT Sans' }} className='mt-lg-5'>Don't have an account yet?<b> SignUp</b> </p>
                                    </div>
        
                                </div>
        
                            </div>
                            
                        </div>
                    </div>
                    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
                </div>
           </div>
        </>
    );
}

export default LoginPage;