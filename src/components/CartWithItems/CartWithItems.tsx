import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context";
import { Product } from "../../interfaces";
import { getNumberOfProducts, getTotalPrice } from "../../utils";
import { CartItem } from "../CartItem";
import { OrderSummary } from "../OrderSummary";

interface Props {
    products: Product[];
}

const CenterSection = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px',
    [theme.breakpoints.down("sm")]: {
        width: '80%',
        paddingBottom: '32px'
    },
}))

export const CartWithItems = ({ products }: Props) => {
    const state = useContext(Context);
    const navigate = useNavigate();
    return <CenterSection>
        <Box display={'flex'} sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row'
            },
        }}>
            <Box padding={'20px 0'} sx={{
                width: {
                    xs: '100%',
                    sm: '60%'
                },
                padding: {
                    xs: 0,
                    sm: 4
                }
            }}>
                <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid rgba(0,0,0,.1)'} mb={3}>
                    <h2>Your Cart</h2>
                    <h4>{getNumberOfProducts(products)} items</h4>
                </Box>
                <Box>
                    {products.map((product: Product) => {
                        return <CartItem
                            key={product.name}
                            name={product.name}
                            image={product.images[0]}
                            size={product.size!}
                            quantity={product.quantity}
                            price={product.price}
                            onDecrementClick={() => state.decrementFromCart(product)}
                            onIncrementClick={() => state.addToCart(product)}
                            onRemoveFromCart={() => state.removeFromCart(product)}
                        />
                    })}
                </Box>
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '40%'
                },
                padding: {
                    xs: 0,
                    sm: 4
                }
            }}>
                <Box display='flex' flexDirection='column' >
                    <h2>Order Summary</h2>
                    <OrderSummary totalPrice={getTotalPrice(products)} onClick={() => navigate("/checkout")} buttonText={"Proceed to checkout"} />
                </Box>
            </Box>
        </Box>
    </CenterSection>
}