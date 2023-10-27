import React from "react";
import AboutUsWall from "../../images/about-us-wall.jpeg";
import { Box, styled } from "@mui/material";
import AboutUsPerson from "../../images/about-us-person.jpeg";

const OurShopTitle = styled('h5')({
    fontFamily: 'Jost',
    fontSize: '17px',
    fontWeight: '700',
    color: '#c8815f'
})

const OurShopDescriptionTitle = styled('h2')({
    fontFamily: 'Jost',
    fontSize: '34px',
    lineHeight: '44px'
})

const OurShopDescription = styled('p')({
    fontFamily: 'Jost',
    fontSize: '17px',
    fontWeight: '400',
    color: '#555'
})
const FounderDescription = styled('b')({
    color: '#555'
})
export const OurShop = () => {
    return <Box>
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
            <img src={AboutUsWall} alt="about-us-wall" />
            <Box
                sx={{
                    ml: {
                        xs: 0,
                        sm: 5
                    },
                    pl: {
                        xs: 0,
                        sm: 5
                    }
                }}
            >
                <OurShopTitle>  OUR SHOP </OurShopTitle>
                <OurShopDescriptionTitle> We believe in Empathy and Honesty </OurShopDescriptionTitle>
                <OurShopDescription> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante suscipit tellus ultrices facilisis. Vestibulum dapibus at risus ac porttitor. Integer ultricies dui in eros pharetra facilisis. </OurShopDescription>

                <b>  Location </b>
                <OurShopDescription> Provider Store, 381b Riley St, Surry Hills, Australia NSW 2010 </OurShopDescription>

                <b>  Opening hours </b>
                <OurShopDescription>  Mon: Closed, Tue-Sat: 12PM-6PM, Sun: Closed </OurShopDescription>
            </Box>
        </Box>
        <Box my={5} py={5} display={'flex'} justifyContent={'space-between'}
            sx={{
                my: {
                    xs: 2,
                    sm: 5
                },
                py: {
                    xs: 2,
                    sm: 5
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
            <img src={AboutUsPerson} alt="about-us-person" />
            <Box
                sx={{
                    ml: {
                        xs: 0,
                        sm: 5
                    },
                    pl: {
                        xs: 0,
                        sm: 5
                    }
                }}
            >
                <OurShopTitle>  MEET THE FOUNDER </OurShopTitle>
                <OurShopDescriptionTitle> Jakob Curtis
                </OurShopDescriptionTitle>
                <FounderDescription>Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</FounderDescription>
            </Box>
        </Box>
    </Box>


}