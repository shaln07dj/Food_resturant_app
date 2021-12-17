import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

function Nav() {
  const {cartTotalQuantity}=useSelector(state=>state.cart)
    return (
        <div>
            <div id ="nav-bar"className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" data-spy="affix" data-offset-top="197" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h3>Food Resturant</h3></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"to='home'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="menu">Menu</Link>
          </li>






        
         { /*<li className="nav-item">
            <Link className="nav-link" to="contact">Reserve A Table</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#service">Service1</a></li>
              <li><a className="dropdown-item" href="#service2">Service2</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              
              
             
            </ul>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="#image-gallery">Image Gallery</a>
          </li>
*/}




          <li className="nav-item">
            <Link className="nav-link" to="contact-us">Contact Us</Link>
          </li>
        </ul>
        <form className="d-flex">
            
         <Link to='/cart' >
         <svg color="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
<span className="bag-quantity"><span>{cartTotalQuantity}</span></span></Link>
        </form>
      </div>
    </div>
    </div>
        </div>
    )
}

export default Nav
