import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai"
import { Cart } from '.'
import { useSelector, useDispatch } from 'react-redux'
import {
    setShowCart,
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
    incQty,
    decQty,
    addItemToCart,
    removeItemFromCart,
    toggleCartItemQuantity,
} from "../store/cartSlice";

function Navbar() {
    const state = useSelector((state) => state.state);
    const dispatch = useDispatch()
    return (

        <div className="navbar-container">
            <p>
                <Link href="/">Рибарлък риболовен магазин</Link>
            </p>
            <button type='button' className='cart-icon' onClick={() => dispatch(setShowCart(true))}>
                <AiOutlineShopping />

                <span className='cart-item-qty'>{state.totalQuantities}</span>
            </button>
            {state.showCart && <Cart />}
        </div >

    )
}

export default Navbar
