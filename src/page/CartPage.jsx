import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slice/cartSlice';


function CartPage({ data }) {
    const dispatch = useDispatch()
        function remove() {
            dispatch(removeFromCart(data));
            
        }
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
                className="h-48 w-full object-cover object-center"
                src={data.volumeInfo.imageLinks?.smallThumbnail}
                alt="Product Image"
            />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                    {data.volumeInfo.title}                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                    {data.volumeInfo.description}
                </p>
                <div className="flex items-center">
                    <button className="ml-auto text-base font-medium text-green-500" onClick={remove} >remove cart</button>
                </div>
            </div>
        </div>
  )
}

export default CartPage