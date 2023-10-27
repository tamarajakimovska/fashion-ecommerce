import React from "react";
import { styled } from '@mui/system';
import AboutUsHeaderImg from '../../images/about-us-header.jpeg'

const HeaderImage = styled('div')({
    backgroundImage: `url(${AboutUsHeaderImg})`,
    width: '100%',
    height: '45vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center'
})

const HeaderDescription = styled('div')({
    width: '65%',
    maxWidth: '1170px',
    margin: '0 auto',
    paddingTop: '7rem'
})

const HeaderTitle = styled('h6')({
    color: '#c8815f',
    fontSize: '17px',
    fontFamily: 'Jost',
    fontWeight: '700'
})

const HeaderText = styled('div')(({ theme }) => ({
    fontFamily: 'Jost',
    fontSize: '56px',
    width: '65%',
    maxWidth: '1170px',
    fontWeight: '600',
    [theme.breakpoints.down("sm")]: {
        fontSize: '30px',
        width: '100%'
    },
}))

export const AboutUsHeader = () => {
    return <div>
        <HeaderImage>
            <HeaderDescription>
                <HeaderTitle>ABOUT</HeaderTitle>
                <HeaderText>Believe in Craftsmanship and Luxurious Design.</HeaderText>
            </HeaderDescription>
        </HeaderImage>
    </div>
}