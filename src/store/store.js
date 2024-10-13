import { configureStore } from "@reduxjs/toolkit"

//---values--------
import category from './slice/category'
import partsArray from './slice/partsArray'

export const store = () => {
    return configureStore({
        reducer: {
            category:category,
            partsRedux: partsArray
        }
    })
}

