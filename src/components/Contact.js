import React from 'react';
import Fade from 'react-reveal/Fade';
import { table_reservation_image} from"./images";

function Contact() {
    return (
        <div>
            <Fade>
            <div className="jumbotron jumbotron-fluid" id="contact">
            
            <section className="section" id="reservation" style={{backgroundImage:`url(${ table_reservation_image})`}}>
              <h6>Reach Out For </h6>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>Reach Out For Us</h6>
                                <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
                            </div>
                            <p>Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="phone">
                                        <i className="fa fa-phone"></i>
                                        <h4>Phone Numbers</h4>
                                        <span><a href="#">705-843-8927</a><br/><a href="#">705-846-8927</a></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="message">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h4>Business address                                    </h4>
                                        <span><a href="#">3600 Ontario, Canada P0R 1H0
                                            <br/>
                                        </a><br/><a href="#"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form id="contact" action="" method="post">
                              <div className="row">
                                <div className="col-lg-12">
                                    <h4>Table Reservation</h4>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                  <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                                  </fieldset>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                  <fieldset>
                                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                                </fieldset>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                  <fieldset>
                                    <input name="phone" type="text" id="phone" placeholder="Phone Number*" required=""/>
                                  </fieldset>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <fieldset>
                                    <select value="number-guests" name="number-guests" id="number-guests">
                                        <option value="number-guests">Number Of Guests</option>
                                        <option name="1" id="1">1</option>
                                        <option name="2" id="2">2</option>
                                        <option name="3" id="3">3</option>
                                        <option name="4" id="4">4</option>
                                        <option name="5" id="5">5</option>
                                        <option name="6" id="6">6</option>
                                        <option name="7" id="7">7</option>
                                        <option name="8" id="8">8</option>
                                        <option name="9" id="9">9</option>
                                        <option name="10" id="10">10</option>
                                        <option name="11" id="11">11</option>
                                        <option name="12" id="12">12</option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <div id="filterDate2">    
                                      <div className="input-group date" data-date-format="dd/mm/yyyy">
                                        <input  name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy"/>
                                        <div className="input-group-addon" >
                                          <span className="glyphicon glyphicon-th"></span>
                                        </div>
                                      </div>
                                    </div>   
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <fieldset>
                                    <select value="time" name="time" id="time">
                                        <option value="time">Time</option>
                                        <option name="Breakfast" id="Breakfast">Breakfast</option>
                                        <option name="Lunch" id="Lunch">Lunch</option>
                                        <option name="Dinner" id="Dinner">Dinner</option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="main-button-icon">Make A Reservation</button>
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          </div>
        </Fade>
        </div>
    )
}

export default Contact
