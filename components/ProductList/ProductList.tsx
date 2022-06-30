import React, { useEffect } from 'react'
import { ProductItem } from '../ProductItem'
import { IProduct } from './../../types/types'

interface ProductListProps {
	products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>

			{products.map((product) => (
				<ProductItem product={product} key={product.slug}/>
			))}
		</div>
	)
}

export default ProductList
