import React from "react";
import{ useState} from 'react'
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const SignUP=()=>{
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const request = {
        method : 'POST', 
        mode: 'cors',
        data:{"name":name,"username":username,"email":email,"password":password},
       
       
    
    }
    const handleSubmit=async(id=null)=>{
        try{
     
        await axios('http://localhost:8000/api/users/register/',request
     
    ).then(res=>{console.log(res.data)
     
      navigate('/cart')
  
      
    
    })}
    catch( error) {
     
      if (error.response.status===401){
        console.log(error.response.status)
        alert("Incorrect Username or Password")
  
    
      }
    };
      
      }
    return(
        <div>
            <Fade>
            <div className="jumbotron jumbotron-fluid" >
            
            
              <h6> </h6>
            <div className="container login_container">
                
                
                    <div className="col-lg-4">
                        <div className="contact-form">
                            <div id="contact" action="">
                              <div className="row">
                                <div className="col-lg-12">
                                    <h4>Login</h4>
                                </div>
                                <div className="">
                                  <fieldset>
                                    <input onChange={(e)=>{setName(e.target.value)}}  type="text" id="username" placeholder="Name" required=""  />
                                  </fieldset>
                                </div>
                                <div className="">
                                  <fieldset>
                                    <input onChange={(e)=>{setUsername(e.target.value)}}  type="text" id="username" placeholder="user name" required=""  />
                                  </fieldset>
                                </div>

                                <div className="">
                                  <fieldset>
                                    <input pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" onChange={(e)=>{setEmail(e.target.value)}}  type="text" id="username" placeholder="email" required=""  />
                                  </fieldset>
                                </div>
                                
                                <div className="">
                                  <fieldset>
                                  <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="password"   required=""  / >
                                </fieldset>
                                </div>
                              
                           
                            
                                
                                <div className="col-lg-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="main-button-icon" onClick={handleSubmit}>Sign Up</button>
                                  </fieldset>
                                </div>
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