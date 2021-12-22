import React from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { toast } from "react-toastify";
import axios from "axios";

export const CheckOut = () => {
const cart=useSelector((state)=>state.cart)
console.log(cart)
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const shippingAddress = {
    address: address,
    city: city,
    postalCode: postalCode,
  };
  const navigate = useNavigate();

  const handleAddress=()=>{

  }
  const request = {
    method: "POST",
    mode: "cors",
  };
  const handleSubmit =  () => {
      const login=localStorage.getItem("Token")
      console.log("Clicked")
      console.log(login)
      if (login==='false'){
        toast.error( 'you are not logged...!',{
          position:"bottom-left"
      });
        navigate ('/login')

      }

  };
  return (
    <diV>
      <Fade>
        <div className="jumbotron jumbotron-fluid">
          <h6> </h6>
          <div className="container login_container">
            <div className="col-lg-4">
              <div className="contact-form">
                <div id="contact" action="">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Shipping Address</h4>
                    </div>
                    <div className="">
                      <fieldset>
                        <input
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          type="text"
                          id="username"
                          placeholder="Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="">
                      <fieldset>
                        <input
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                          type="text"
                          id="username"
                          placeholder="City"
                          required=""
                        />
                      </fieldset>
                    </div>

                    <div className="">
                      <fieldset>
                        <input
                          onChange={(e) => {
                            setPostalCode(e.target.value);
                          }}
                          type="text"
                          id="username"
                          placeholder="PostalCode"
                          required=""
                        />
                      </fieldset>
                    </div>

                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                          onClick={handleAddress}
                        >
                          Save
                        </button>
                      </fieldset>
                    </div>
                    <br/>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                          onClick={handleSubmit}
                        >
                          Place Order
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </diV>
  );
};
