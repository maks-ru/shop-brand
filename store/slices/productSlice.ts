import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from './../../types/types'

type ProductState = {
	data: IProduct[]
}

const initialState: ProductState = {
	data: [],
}

const productSlice = createSlice({
	name: 'products',
	initialState,

	reducers: {
		addProduct(state, action: PayloadAction<string>) {
			console.log('state -', state)
		},
	},
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer
