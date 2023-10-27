import React, { useContext } from "react";
import { CartWithItems, EmptyCart, Footer, HeaderBackground, Navigation } from "../../components";
import { Box } from "@mui/material";
import { Context } from "../../context";


export const CartContainer = () => {
    const state = useContext(Context);

    return <div>
        <Navigation />
        <Box mt={'5rem'}>
            <HeaderBackground title="Cart" />
        </Box>
        {state.cartItems.length > 0 ? <CartWithItems products={state.cartItems} /> : <EmptyCart />}
        <Footer />
    </div>
}