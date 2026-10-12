import React from 'react'
import ProductList from './ProductList'
import products from "./../data/products";

const Product = () => {

    return (
        <> <h1 className="text-2xl font-bold text-center my-4">
            Product Store
        </h1>


            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    <ProductList products={products} />
                    
                </div>

            </div>
        </>
    )
}

export default Product
