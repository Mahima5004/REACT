import { useDispatch, useSelector } from 'react-redux'
import MenuItem from './MenuItem';
import {clearCart} from "../utils/cartSlice.js"

function Cart() {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearItem = () => {
         dispatch(clearCart())  
    }

  return (
    <div className='w-9/12 mx-auto pt-24 text-center'>
          <h1 className='text-3xl font-bold m-10'>Cart</h1>
          <button className='p-4 m-6 bg-black text-white rounded-xl cursor-pointer'
            onClick={handleClearItem}
          >Clear Cart</button>
          <div>
              {
                  cartItems.length === 0 ? (
                      <p>Your cart is empty... Please Add items</p>
                  ) :
                      cartItems.map((item) => (
                      <MenuItem key = {item?.card?.info?.id} item = { item } />
                  ))
              }
          </div>
          
    </div>
  )
}

export default Cart
