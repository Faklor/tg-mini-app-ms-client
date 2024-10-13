import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'




const initialState = {
  category:'',
  visibleAddBlock:false
}

export const counterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setVisibleAddBlock: (state) => {
      if(state.visibleAddBlock){
        state.visibleAddBlock = false
      }
      else{
        state.visibleAddBlock = true
      }
    },
    deleteFirstItem(state){
      state.category.shift()
    } 
    
  }
})

export const { setCategory,setVisibleAddBlock, deleteFirstItem } = counterSlice.actions

export default counterSlice.reducer