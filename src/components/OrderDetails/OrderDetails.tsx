import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartItem, OrderSummary } from "..";
import { Context } from "../../context";
import { Product } from "../../interfaces";
import { getTotalPrice } from "../../utils";

interface Props {
    products: Product[]
}


export const OrderDetails = ({ products }: Props) => {
    const state = useContext(Context);
    return <Box>
        <h2>Your Order</h2>

        <Box>
            {products.map((product: Product) => {
                return <CartItem image={product.images[0]}
                    name={product.name}
                    size={product.size!}
                    quantity={product.quantity}
                    price={product.price}
                    onDecrementClick={() => state.decrementFromCart(product)}
                    onIncrementClick={() => state.addToCart(product)}
                    onRemoveFromCart={() => state.removeFromCart(product)}
                />
            })}
            <OrderSummary totalPrice={getTotalPrice(products)} onClick={() => console.log("on place order click")} buttonText={"Place Order"} />
        </Box>
    </Box>

}