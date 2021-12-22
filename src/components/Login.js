import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserDetails, } from '../slice/UserSlice';
import { toast } from "react-toastify";
import Fade from 'react-reveal/Fade';
import  axios  from 'axios';
import { table_reservation_image} from"./images";


const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [token,setToken]=useState('')
  const [barToken,setbarToken]=useState("")
 
  const request = {
    method : 'POST', 
    mode: 'cors',
    data:{"username":username,"password":password},
   
   

}
const dispatch = useDispatch()
const navigate=useNavigate()
var user=localStorage.getItem("User")
console.log(user)





  const handleSubmit=async(id=null)=>{
    try{
 
    await axios('http://localhost:8000/api/users/login/',request
 
).then(res=>{console.log(res.data)
  dispatch(loginUserDetails(res.data))

  navigate('/cart')
  localStorage.setItem("Token",JSON.stringify(res.data.access))
  setbarToken(localStorage.getItem("Token"))
  toast.success(`Hello,${res.data.name} you are logged In ...!`,{
    position:"bottom-left"
});
  
})}
catch( error) {
 
  if (error.response.status===401){
    console.log(error.response.status)
    
    toast.error( `Invaid Credentials`,{
      position:"bottom-left"
  });
  navigate('/login')

  }
};
  
  }

  return (
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
                                    <input onChange={(e)=>{setUsername(e.target.value)}}  type="text" id="username" placeholder="user name" required=""  />
                                  </fieldset>
                                </div>
                                
                                <div className="">
                                  <fieldset>
                                  <input onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" placeholder='password'  required=""  / >
                                </fieldset>
                                </div>
                              
                           

                                <div className="col-lg-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="main-button-icon" onClick={handleSubmit}>Login</button>
                                  </fieldset>
                                </div>
                                <div className="">
                                  <fieldset>
                                 <Link className="nav-link" to='/signup'>SignUp</Link>
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
  );
};

export default Login;