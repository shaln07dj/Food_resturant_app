import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    items:[],
    status:null,
    error:null


};
const access_token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyMzUzOTM5LCJpYXQiOjE2Mzk3NjE5MzksImp0aSI6IjU5MzQxY2FiNTdiYjQ3YjdhMjg4MjkxMDExMmNlMzU0IiwidXNlcl9pZCI6MX0.adeda1Wo257XdX3zVGgpNVe9kIHXgTqhoTjwJ0gnDcc'
export const productFetch=createAsyncThunk(
    "products/productsFetch",
   async(id=null,{rejectWithValue})=>{
       try{
     const response = await axios.get('http://localhost:8000/api/products', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
        return response?.data;}
        catch(error){
            return rejectWithValue("error occured")
        }
    }
)
const productSlice=createSlice({
    name:"products",
    initialState,
    //this reducer will generate action creaters
    reducers:{},
    //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )
    extraReducers:{
        [productFetch.pending]:(state,action)=>{
            state.status="pending"
        },
        [productFetch.fulfilled]:(state,action)=>{
            state.status="sucess"
            state.items=action.payload
        },
        [productFetch.rejected]:(state,action)=>{
            state.status="rejected"
            state.error=action.payload
        }
        
    }
    //modify:(state,action)=>{
        //state.val.push(action.payload)
   // }
});

//export const {modify}=cartSlice.actions
export default productSlice.reducer;
 
