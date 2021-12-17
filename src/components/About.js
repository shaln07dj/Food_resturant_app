import { formatMs } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { thumb_image_1,thumb_image_2,thumb_image_3,
    thumb_image_4,thumb_image_5,thumb_image_6,thumb_image_7,thumb_image_8,thumb_image_9,about_video_image} from './images';

function About() {
    return (
        <div  className="jumbotron jumbotron-fluid">
            <Fade>
            <section className="section" id="about"style={{zIndex: "0"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="left-text-content">
                    <div className="section-heading">
                        <h6>About Us</h6>
                        <h2>ABC Restaurant  - A Foodie’s Paradise</h2>
                        <p>Indulge in heavenly Canadian and Middle Eastern flavours at ABC Restaurant- The Syrian Kitchen! We make our dishes from scratch using the finest ingredients and spices and ensure an unforgettable culinary experience for you.
                        </p>
                    </div>
                    <div className="section-heading">
                        
                        <h2>Committed To Serving The Community</h2>
                        <p>We are a community-minded business with a strong passion for serving people and making them happy. This is the reason why we always offer food that is not only enjoyable but also comes at pocket-friendly prices. We also customize your orders to provide meals that suit your taste palate perfectly. Come in with your friends and family expecting superb food and great customer service, and we assure you that you won’t be disappointed!</p>
                    </div>
                    <div className="section-heading">
                        
                        <h2>Quality Food, Excellent Service</h2>
                        <p>When you visit ABC Restaurant - The Syrian Kitchen, consider yourself in for a treat! We serve all types of Middle Eastern food, including chicken shawarma, donair, falafel, and kafta. We care for quality and take pride in the fact that our customers trust us to provide them with an excellent dining experience. Our friendly and welcoming staff always makes sure that you have a great time while dining at our restaurant. 
                        </p>
                        <br/><br/>
                        
                    </div>
                    <div className="section-heading">
                        
                        <h2>A Range Of Enticing Dishes</h2>
                       
                        <br/><br/>
                        
                    </div>
                    
                    <div className="row">
                        <div className="col-4">
                            <img src={thumb_image_1} alt=""/><br/><br/>
                            <h6 style={{color:"#eb0808"}}>Pizzas</h6>
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_2} alt=""/><br/><br/>
                            <h6 style={{color:"#eb0808;"}}>A variety of poutine with cheese curds</h6>                                    
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_3} alt=""/><br/><br/>
                            <h6 style={{color:"#eb0808"}}>Fish and hand-cut fries</h6>
                
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-4">
                            <img src={thumb_image_4}alt=""/><br/><br/>
                            <h6 style={{color: "#eb0808"}}>Donairs</h6>
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_5} alt=""/><br/><br/>
                            <h6 style={{color: "#eb0808"}}>Chicken shawarma</h6>
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_6} alt=""/><br/><br/>
                            <h6 style={{color:"#eb0808"}}>Falafel</h6>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-4">
                            <img src={thumb_image_7} alt=""/><br/><br/>
                            <h6 style={{color: "#eb0808"}}>Kafta</h6>
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_8} alt=""/><br/><br/>
                            <h6 style={{color: "#eb0808"}}>Hummus</h6>
                        </div>
                        <div className="col-4">
                            <img src={thumb_image_9} alt=""/><br/><br/>
                            <h6 style={{color:"#eb0808"}}>Baba Ghanouj</h6>
                        </div>
                        <div>
                            <br/><br/>
                            <div className="section-heading">
                        
                                <h6  style={{color: "#eb0808 "}}>From heavenly Syrian dishes to mouth-watering comfort food, relish the best tastes at ABC Restaurant! </h6>

                                <br/>
                                <div className="main-white-button scroll-to-section">
                                    <a href="#reservation"className="btn btn-primary"><h7 >Call To Order</h7></a>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
              
            </div>
            
            <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="right-content">
                    <div className="thumb">
                        <a rel="nofollow" href="http://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
                        <img src={about_video_image} alt=""style={{height:"600px", width:"550px"}}/>
                    </div>
                </div>
            
            <br/><br/><br/><br/><br/>
                <div className="right-content">
                    <div className="thumb">
                        <a rel="nofollow" href="http://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
                        <img src={about_video_image} alt=""style={{height:"600px", width:"550px"}}/>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
                <div className="right-content">
                    <div className="thumb">
                        <a rel="nofollow" href="http://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
                        <img src={about_video_image} alt=""style={{height:"600px", width:"550px"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </Fade>

        </div>
    )
}

export default About
