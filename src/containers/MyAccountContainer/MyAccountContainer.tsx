import { Box } from "@mui/system";
import React from "react";
import { AccountDetails, Footer, HeaderBackground, Navigation } from "../../components";


export const MyAccountContainer = () => {
    return <div>
        <Navigation />
        <Box pt={'5rem'}>
            <HeaderBackground title="My Account" />
        </Box>
        <AccountDetails />
        <Footer />

    </div>
}