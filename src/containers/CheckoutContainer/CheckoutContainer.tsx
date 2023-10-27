import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { BillingDetails, Footer, HeaderBackground, Navigation, OrderDetails } from "../../components";
import { Context } from "../../context";

const CenterSection = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px',
    paddingTop: '50px',
    paddingBottom: '50px',
    [theme.breakpoints.down("sm")]: {
        width: '80%',
        paddingBottom: '32px'
    },
}))

export const CheckoutContainer = () => {
    const state = useContext(Context);

    return <div>
        <Navigation />
        <Box pt={'5rem'}>
            <HeaderBackground title="Checkout" />
        </Box>
        <CenterSection>
            <Box display={'flex'} sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
                <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '60%'
                    },
                    paddingRight: {
                        xs: 0,
                        sm: '7rem'
                    }
                }}>
                    <BillingDetails />
                </Box>

                <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '40%'
                    }
                }}>
                    <OrderDetails products={state.cartItems} />
                </Box>
            </Box>
        </CenterSection>
        <Footer />
    </div>
}