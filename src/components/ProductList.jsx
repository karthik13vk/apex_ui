import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    return (
        <>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div> */}
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </>
    )
}

export default ProductList
