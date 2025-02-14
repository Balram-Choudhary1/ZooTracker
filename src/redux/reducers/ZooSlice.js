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
        },
        deleteZoo:(state,action)=>{
            state.data = state.data.filter((i) => i?.id !== action.payload.id)
        },
        updateZoo:(state,action) => {
            const {id,title,desc,breed,image} = action.payload
            const  index = state.data?.findIndex((i) => i.id === id);
            if(index!==-1){
                state.data[index] =  {...state.data[index], title, desc, breed ,image};
            }
        }
     }
})

export const { addZoo, deleteZoo, updateZoo } = zooSlice.actions
export default zooSlice.reducer;