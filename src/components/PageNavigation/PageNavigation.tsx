import { Box, styled } from "@mui/material";
import React from "react";

const NavigationBackground = styled('div')({
    backgroundColor: '#f8f9fc',
    marginTop: '5rem',
    padding: '20px',

})

export const PageNavigation = () => {
    return <div>
        <NavigationBackground>
            <Box display={'flex'} width={'65%'} maxWidth={'1170px'} margin={'0 auto'}>
                <Box mr={2}>
                    <Box component={'span'} mr={1}>Home</Box>
                    <span> {'>'} </span>
                </Box>
                <Box mr={2}>
                    <Box component={'span'} mr={1}>Products</Box>
                    <span>{'>'}</span>
                </Box>
                <Box mr={2}>
                    <Box component={'span'} mr={1}>Denim</Box>
                    <span>{'>'}</span>
                </Box>
                <Box mr={2}>
                    <Box component={'span'} mr={1}>Classic Jacket</Box>

                </Box>
            </Box>
        </NavigationBackground>
    </div>
}