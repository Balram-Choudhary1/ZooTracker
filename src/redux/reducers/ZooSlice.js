import { createSlice } from "@reduxjs/toolkit";

export const zooSlice = createSlice({
     name:'zoo',
     initialState:{
        data:[]
     },
     reducers:{
        addZoo:(state,action)=>{
         const zooData = {
              id:state.data?.length+1,
              title: action.title,
              desc:action.desc,
              breed:action.breed,
              image:action.image
         }
           state.data=[zooData,...state?.data]
        }
     }
})

export const { addZoo } = zooSlice.actions
export default zooSlice.reducer;