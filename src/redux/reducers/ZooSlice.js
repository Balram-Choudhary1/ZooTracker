import { createSlice } from "@reduxjs/toolkit";

export const zooSlice = createSlice({
     name:'zoo',
     initialState:{
        data:[],
     },
     reducers:{
        addZoo:(state,action)=>{
         const zooData = {
              id: state.data?.length+1,
              title: action.payload.title,
              desc: action.payload.desc,
              breed: action.payload.breed,
              image: action.payload.image
         }
           state.data=[zooData, ...state?.data];
        }
     }
})

export const { addZoo } = zooSlice.actions
export default zooSlice.reducer;