import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'




const initialState = {
  parts:[],
  searchParts:[]
}

export const counterSlice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    setParts: (state, action) => {
      state.parts = action.payload
      //---sort----
      let sortABC = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      let sortCountABC = sortABC.filter(item => item.count > 0).concat(sortABC.filter(item => item.count === 0))
      // let sortCountAndCatagory = sortABC.sort((a, b) => {
      //   if (a.category === b.category) {
      //     return b.count - a.count;
      //   }
      //   return a.category.localeCompare(b.category);
      // });
      //----------
      state.searchParts = sortCountABC

    },
    searchWorld(state, action){
  
      state.searchParts = action.payload   
      
    } 
    
  }
})

export const { setParts,searchWorld } = counterSlice.actions

export default counterSlice.reducer