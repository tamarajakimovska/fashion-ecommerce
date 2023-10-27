import React, { useContext, useLayoutEffect, useState } from "react";

import logo from '../../images/logo.svg';
import { Box, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Context } from "../../context";
import { getNumberOfProducts } from "../../utils";

const Navbar = styled('div')({
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 9999,
})

const NavbarLogo = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
        cursor: 'pointer'
    },
    [theme.breakpoints.down("sm")]: {
        width: '95%',
        padding: '16px 8px 16px 8px'
    },
}))


export const Navigation = () => {
    const [activeNavigationItem, setActiveNavigationItem] = useState<string>('/')
    const navigate = useNavigate();
    const location = useLocation();
    const state = useContext(Context);

    useLayoutEffect(() => {
        setActiveNavigationItem(location.pathname)
    }, [location.pathname]);

    return <Navbar>

        <NavbarLogo>
            <Box display={'flex'} alignItems={'center'}>
                <Box sx={{
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}><img src={logo} alt="nav-logo" onClick={() => navigate(`/`)} /> </Box>

                <Box className={activeNavigationItem === '/' ? 'active-navigation' : ''} component={'span'} sx={{
                    ml: {
                        xs: 0,
                        sm: 2
                    }
                }} mr={2} onClick={() => navigate(`/`)}>Home</Box>
                <Box className={activeNavigationItem === '/about-us' ? 'active-navigation' : ''} component={'span'} mr={2} onClick={() => navigate(`/about-us`)}>About Us</Box>
                <Box className={activeNavigationItem === '/contact-us' ? 'active-navigation' : ''} component={'span'} mr={2} onClick={() => navigate(`/contact-us`)}>Contact Us</Box>
                <Box className={activeNavigationItem === '/faq' ? 'active-navigation' : ''} component={'span'} mr={2} onClick={() => navigate(`/faq`)}>FAQ</Box>
            </Box>
            <Box display={'flex'} >
                <Box mr={1} onClick={() => navigate("/my-account")}> <PersonIcon /> </Box>
                <Box onClick={() => navigate("/cart")}>
                    <ShoppingBasketIcon />
                    {getNumberOfProducts(state.cartItems)}
                </Box>
            </Box>
        </NavbarLogo>

    </Navbar>
}