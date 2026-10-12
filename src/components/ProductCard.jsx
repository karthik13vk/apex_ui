import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "./../redux/cartSlice";
function ProductCard({ product }) {
    const dispatch = useDispatch();
    if (!product) return <p>Loading...</p>;
    return (
        <div className="bg-white rounded-xl shadow-md p-4">
            <img src={product.image} className="h-40 w-full object-cover" />

            <h2 className="font-bold mt-2">{product.title}</h2>
            <p className="text-green-600">₹{product.price}</p>

            <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
