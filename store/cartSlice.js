// stateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    qty: 1,
};

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setShowCart: (state, action) => {
            state.showCart = action.payload;
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setTotalQuantities: (state, action) => {
            state.totalQuantities = action.payload;
        },
        incQty: (state) => {
            state.qty += 1;
        },
        decQty: (state) => {
            if (state.qty > 1) {
                state.qty -= 1;
            }
        },
        addItemToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const checkProductInCart = state.cartItems.find(
                (item) => item._id === product._id
            );

            state.totalPrice += product.price * quantity;
            state.totalQuantities += quantity;

            if (checkProductInCart) {
                state.cartItems = state.cartItems.map((cartProduct) => {
                    if (cartProduct._id === product._id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + quantity,
                        };
                    }
                    return cartProduct;
                });
            } else {
                product.quantity = quantity;
                state.cartItems = [...state.cartItems, { ...product }];
            }
            //   dispatch(showToast(`${qty} ${product.name} added to the cart.`));
        },
        removeItemFromCart: (state, action) => {
            const product = action.payload;
            const foundProduct = state.cartItems.find(
                (item) => item._id === product._id
            );
            const newCartItems = state.cartItems.filter(
                (item) => item._id !== product._id
            );

            state.totalPrice -= foundProduct.price * foundProduct.quantity;
            state.totalQuantities -= foundProduct.quantity;
            state.cartItems = newCartItems;
        },

        toggleCartItemQuantity: (state, action) => {
            const { id, value } = action.payload;
            const foundProduct = state.cartItems.find(
                (item) => item._id === id
            );
            const newCartItemsPlus = state.cartItems.map((item) => {
                if (item._id === id) {
                    return { ...item, quantity: foundProduct.quantity + 1 };
                }
                return item;
            });
            const newCartItemsMinus = state.cartItems.map((item) => {
                if (item._id === id) {
                    return { ...item, quantity: foundProduct.quantity - 1 };
                }
                return item;
            });
            if (value === "inc") {
                state.cartItems = [...newCartItemsPlus];
                state.totalPrice += foundProduct.price;
                state.totalQuantities += 1;
            } else if (value === "dec") {
                if (foundProduct.quantity > 1) {
                    state.cartItems = [...newCartItemsMinus];
                    state.totalPrice -= foundProduct.price;
                    state.totalQuantities -= 1;
                }
            }
        },

        // toggleCartItemQuantity: (state, action) => {
        //     const { id, value } = action.payload;
        //     const foundProduct = state.cartItems.find(
        //         (item) => item._id === id
        //     );
        //     const newCartItems = state.cartItems.filter(
        //         (item) => item._id !== id
        //     );
        //     if (value === "inc") {
        //         state.cartItems = [
        //             ...newCartItems,
        //             { ...foundProduct, quantity: foundProduct.quantity + 1 },
        //         ];
        //         state.totalPrice += foundProduct.price;
        //         state.totalQuantities += 1;
        //     } else if (value === "dec") {
        //         if (foundProduct.quantity > 1) {
        //             state.cartItems = [
        //                 ...newCartItems,
        //                 {
        //                     ...foundProduct,
        //                     quantity: foundProduct.quantity - 1,
        //                 },
        //             ];
        //             state.totalPrice -= foundProduct.price;
        //             state.totalQuantities -= 1;
        //         }
        //     }
        // },
    },
});

export const {
    setShowCart,
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
    incQty,
    decQty,
    addItemToCart,
    removeItemFromCart,
    toggleCartItemQuantity,
} = stateSlice.actions;

export default stateSlice.reducer;
