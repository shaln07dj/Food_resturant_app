import React,{useState} from "react";
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const FetchData=()=>{
    const {items,status,error} = useSelector(state=> state.productSlice);
    const dispatch = useDispatch()
    const navigate=useNavigate()
console.log(items)
console.log(error)
console.log(status)
const typeSytle={
    color:""
}

function handleAddToCart(product){
    console.log(product)
    dispatch(addToCart(product))
    navigate('/cart')

 
    console.log("Added")
  
}
var lcc=localStorage.getItem("User")
console.log(lcc)
let newarr=[]
newarr=items.filter((item,index)=>{
    return (item.img=="https://user-images.githubusercontent.com/77019950/142701250-a7fcc935-3801-4f0b-aed3-8e884f171caf.jpg"||item.img=="https://user-images.githubusercontent.com/77019950/142701251-cf51b440-cd33-48e6-a386-580a36af0ebd.jpg")
})
console.log(newarr)

    return(
        <div  className="jumbotron jumbotron-fluid">
     
     
   
     
        <div className="container">
        <Zoom bottom> <div className="row align-items-start">
            {status=="pending" ?(
            <p>Loading....</p>
            ):error?(
            <p>An error occured...<p/></p>
            ):(
                items.map((item, index) => 
      
                <div key={item.id} class="col-sm" style={{border:"none"}}> 
                 <div className="card"  style={{height:"600px",width:"400px",backgroundImage: "url(" + item.img + ")",backgroundPosition:"center",backgroundRepeat:"none"}}>
                
                  <div className="overlay"></div>
                  <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <h7 className="card-text"> {item.info}</h7>
                          <p className="card-text"> {item.type=="Veg"? "Veg":"non-veg"}</p>
                          <div className="card-body-a">
                          <a  className="btn btn-primary" >₹ {item.price}</a>
                         
                          </div>
                        </div>
                        <button  className="btn btn-primary" style={{ position:'absolute',zIndex:'3'}} onClick={()=>handleAddToCart(item)}>Add To Cart</button>
                 
                </div>
                <br></br></div>
              )
            )
            }
    
        </div>

            </Zoom>
        </div>
        </div>
    )

}

export default FetchData