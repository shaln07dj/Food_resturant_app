import { style } from '@material-ui/system';
import React from 'react';
import Fade from 'react-reveal/Fade';
import motion_image from './images/video.gif';
import image from "./images/turkish-table.png";
import about_image1  from "./images/menu-item-06.jpg";
import about_image2  from "./images/menu-item07.jpg";
import about_image3  from "./images/menu-item-03.jpg";


function Home() {
    return (
        <div>
          <Fade>

<div>

</div>
<br/>

  <br/>
  
  <div className="head" >

    <img src={motion_image}style={{ width:"100%"}}/>
   


  </div>
          
            <div className="jumbotron">
            <div className="section" id="home-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="left-text-content">
                                <div className="section-heading">

                                    <h1>Authentic Middle-Eastern Flavours You Will Absolutely Love!
                                    </h1>
                                </div>
                                <p>ABC Restaurant - The Syrian Kitchen brings the best of Canadian and Middle Eastern flavours to the table. From mouth-watering pizzas to appetizing chicken shawarmas, we have something for everyone!
                                </p><br />

                                <div className="section-heading">

                                    <h2>The Best Place For Canadian And Lebanese Food In New Glasgow

                                    </h2>
                                </div>
                                <p>ABC Restaurant - The Syrian Kitchen is a cherished destination for people looking for flavourful food in New Glasgow, Nova Scotia. Our wide-ranging menu includes everything, from delectable poutine with fresh cheese curds to hot dogs with a twist, and more. Our friendly and courteous staff takes your comfort and preferences seriously and customizes orders as per your requests. Visit our eatery with your friends or family and enjoy a lovely dining experience!


                                </p><br />

                                <div className="section-heading">

                                    <h2>Making People Happy, Bite By Bite


                                    </h2>
                                </div>
                                <p>We believe that food is an integral part of every community. Being a Syrian kitchen in New Glasgow, we bring our understanding of diversity and love for food to the people in the city. We serve you authentic Syrian flavours in an amiable setting, and if needed, tweak our menu to suit your Canadian tastes. We treat all our customers like family. We promise that you won’t have to wait too long to get your order on the table. We are proud to be a part of the dynamic culture of Pictou County and look forward to seeing you soon!

                                </p><br />

                                <div className="section-heading">

                                    <h3>What We Are Known For
                                    </h3>

                                    <p>Courteous Staff<br />
                                        Pocket-Friendly Prices<br />
                                        Diverse Food Options<br />
                                        Customer Satisfaction

                                    </p>
                                </div>




                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="right-content">
                                <div className="thumb">
                                    <img className="home-img" alt=""src={image}/>


                                        <br /><br /><br /><br />
      
                                  
                              </div>

                                    <div className="thumb">
                                        <br /><br /><br />
                                        <img className="home-img" alt="" src={image}/>
                                  
      
                                  
                              </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="btnl">
                        <br />
                        <a className="btn btn-primary btn-mg" href="#product" role="button">Products</a>
                        <a className="btn btn-primary btn-mg" href="#service" role="button">Services</a>
                    </div>

                </div>

                  
          <div id ="main" className="main">
            <div className="row">
             
              <div className="col-sm" >
                <div className="card" style={{ height:"500px " }}>
                 
                    <img src={ about_image1}  style={{ height:"500px "}} className="card-img-top" alt="..."/>
                    <div className="overlay"></div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="card-body-a">
                      <a href="#" className="btn btn-primary">View </a>
                      <a href="#" className="btn btn-primary">Order</a>
                      </div>
                    </div>
        
                  </div>
  
  
              </div>
              <div className="col-sm">
                  <div className="card" style={ {height:"500px"}}>
                      <img src={ about_image2} className="card-img-top" alt="..." style={{height:"500px"}} />
                      <div className="overlay"></div>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-body-a">
                        <a href="#" className="btn btn-primary">View </a>
                        <a href="#" className="btn btn-primary">Order</a>
                        </div>
                      </div>
          
          
                    </div>
  
  
              </div>
              <div className="col-sm">
                  <div className="card" style={{height: "500px"}}>
                      <img src={ about_image3} className="card-img-top" alt="..."/>
                      <div className="overlay"></div>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-body-a">
                        <a href="#" className="btn btn-primary">View </a>
                        <a href="#" className="btn btn-primary">Order</a>
                        </div>
                      </div>
          
                    </div>
  
  
              </div>
              
            </div>
            </div>

        </Fade>
        </div>
    )
}

export default Home
