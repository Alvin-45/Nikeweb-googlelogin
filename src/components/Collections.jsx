import React, { useState } from 'react';
import b1 from '../assets/s1.png';
import b2 from '../assets/s2.png';
import b3 from '../assets/s3.png';
import b4 from '../assets/s4.png';
import b5 from '../assets/s5.png';
import b6 from '../assets/s6.png';
import b7 from '../assets/b7.png';
import b8 from '../assets/b8.jpeg';
import s1 from '../assets/sh1.webp';
import s2 from '../assets/sh2.png';
import s3 from '../assets/sh2.jpeg';
import s4 from '../assets/sh4.png';
import s5 from '../assets/sh5.png';
import s6 from '../assets/sh6.png';
import s7 from '../assets/sh7.jpeg';
import s8 from '../assets/sh8.jpg';
import Testimonials from './Testimonials';

function Collections() {
    const [activeCategory, setActiveCategory] = useState('Boots');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <div id='collection' className="collection bg-light p-5" style={{ width: '93%' }}>
                <h1 className="text-center">Our <span className="text-danger">Collections</span></h1>
                <div className="grps">
                    <div className="linkitem text-center d-flex justify-content-evenly flex-wrap mt-4">
                        <p className={`listitem fw-bolder ${activeCategory === 'Boots' ? 'active' : ''}`} onClick={() => handleCategoryClick('Boots')}>Boots</p>
                        <p className={`fw-bolder ${activeCategory === 'Shoes' ? 'active' : ''}`} onClick={() => handleCategoryClick('Shoes')}>Shoes</p>
                        <p className={`fw-bolder ${activeCategory === 'Sports Shoe' ? 'active' : ''}`} onClick={() => handleCategoryClick('Sports Shoe')}>Sports Shoe</p>
                    </div>
                    <div className={`boots d-flex justify-content-around flex-wrap ${activeCategory === 'Boots' ? '' : 'd-none'}`}>
                    <a href='#' className='link'>
                        <div className='flex-column text-center fw-bolder'>
                                <img src={b1} alt="" className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                    </a>
                        <a href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b2} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b3} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b4} alt="" className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b5} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b6} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b7} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={b8} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Mercurial Football Shoes</u></h5>
                            </div>
                        </a>
                        
                    </div>
                    <div className={`shoes d-flex justify-content-around flex-wrap ${activeCategory === 'Shoes' ? '' : 'd-none'}`}>
                    <a  href='#' className='link'>
                        <div id='n1' className='flex-column text-center fw-bolder'>
                                <img src={s1} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Dunk High Grey/Aluminum</u></h5>
                            </div>
                    </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s2} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Air Force 1 Shadow</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s3} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Air Force 1 Mid</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s4} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Men's Legend Essential</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s5} alt="" className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Men's Sale Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s6} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Spark Women's Shoes</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link' >
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s7} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Air Air Max</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src={s8} alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Air Max 90 20 Bubble</u></h5>
                            </div>
                        </a>
                        
                    </div>
                    <div className={`sportsshoe d-flex justify-content-around flex-wrap ${activeCategory === 'Sports Shoe' ? '' : 'd-none'}`}>
                    <a  href='#' className='link'>
                        <div className='flex-column text-center fw-bolder'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DIz8jPwpAmDZV0x-HNwoDg_ZphyhqREo1qUv5WwrBQ&s" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Revolution 7</u></h5>
                            </div>
                    </a>
                       <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw2e8817d6/images/60901901/Rebel_60901901-00_blackwhite_hi-res.jpg?sw=750&sh=750&sm=fit&q=60" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Running Renew </u></h5>
                            </div>
                       </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://m.media-amazon.com/images/I/51YyHzzf9+L._SY500_.jpg" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>NIKE React Miler 2 </u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Revolution 6 </u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://images-eu.ssl-images-amazon.com/images/I/51crsMMADTL._AC_UL600_SR600,600_.jpg" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike Revolution Road</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc_nYt9gIgZ6pgg_uIRpiu9XJhjdKRFt-Z5Llq8-Uu6GdaPtMcE4c7RzzmC3dXKNYYS4&usqp=CAU" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>Nike ZoomX Vaporfly</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c8f8b93-fce2-4c6d-a597-2ddb06dfa4b7/structure-25-road-running-shoes-tFBSvw.png" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>NIKE AIR ZOOM</u></h5>
                            </div>
                        </a>
                        <a  href='#' className='link'>
                            <div className='flex-column text-center fw-bolder'>
                                <img src="https://i.ebayimg.com/images/g/tgMAAOSwivNiHmmP/s-l400.jpg" alt=""  className='bb1'/>
                                <p>₹3000</p>
                                <h5 className='fw-bolder'><u>NIKE ZOOM VAPOR PRO</u></h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Testimonials/>
        </>
    );
}

export default Collections;
