import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    items:[],
    name:"",
    username:"",
    email:"",
    isAdmin:null,
    token:'',
    status:false

  
};


const LoginUserSlice=createSlice({
  name:"user",
  initialState,
  //this reducer will generate action creaters 
  reducers:{
    loginUserDetails(state,action){
      console.log(action.payload.id)
      state.name=action.payload.name
      state.email=action.payload.email
      state.username=action.payload.username
      state.isAdmin=action.payload.isAdmin
      state.token=action.payload.access
      state.status=true
      localStorage.setItem("Token",true)
      localStorage.setItem("User",state.username)
    


    },
    logOut(state,action){
      state.name=""
      state.email=""
      state.username=""
      state.isAdmin=null
      state.token=' '
      state.status=false
      localStorage.setItem("Token",false)
      localStorage.setItem("User",null)

    }
  },
  //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )

  //modify:(state,action)=>{
      //state.val.push(action.payload)
 // }
});

export const {loginUserDetails,logOut}=LoginUserSlice.actions
export default LoginUserSlice.reducer;
