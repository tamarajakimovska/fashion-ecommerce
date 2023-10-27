import { Box, Button, ButtonProps, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";



const CurrentlyEmpty = styled('h2')({
    fontWeight: 'bold',
    fontFamily: 'Jost',
    letterSpacing: 'inherit',
    lineHeight: 'normal',
    fontSize: '48px',
    color: '#11111',
    textAlign: 'center',


})

const CheckCart = styled('p')({
    textAlign: 'center',
    fontSize: '17px',
    color: '#555555',


})

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    padding: '10px 20px',

    backgroundColor: '#c8815f',
    '&:hover': {
        backgroundColor: '#c8815f',
    },
}));

const ButtonStyle = styled('div')({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px',
    marginBottom: '7%'
})


export const EmptyCart = () => {
    const navigate = useNavigate();
    return <div>
        <Box>
            <CurrentlyEmpty>Your cart is currently empty.</CurrentlyEmpty>
            <CheckCart>You may check out all the available products and buy some in the shop.</CheckCart>
        </Box>

        <ButtonStyle>
            <ColorButton variant="contained" onClick={() => navigate("/")}>Return to shop</ColorButton>
        </ButtonStyle>

    </div>
}