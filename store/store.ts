import { configureStore } from '@reduxjs/toolkit'
import porductReducer from './slices/productSlice'

const store = configureStore({
	reducer: {
		products: porductReducer,
	},
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
