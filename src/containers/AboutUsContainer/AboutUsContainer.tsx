import React from "react";
import { AboutUsHeader, CustomerSlider, Footer, Navigation, OurShop, ProductDescription, SectionHeader } from "../../components";
import { styled } from '@mui/system';
import { faPaste } from "@fortawesome/free-regular-svg-icons";
import { Box } from "@mui/material";
import { faSeedling, faUserTie } from "@fortawesome/free-solid-svg-icons";


const CenterSection = styled('div')({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px'
})
const ProductSection = styled('div')({
    backgroundColor: '#f9f9f9',
    padding: '3rem 0'
})

export const AboutUsContainer = () => {
    return <div>
        <Navigation />
        <Box
            sx={{
                mt: {
                    xs: '80px',
                    sm: 0
                }
            }}
        >
            <AboutUsHeader />
        </Box>
        <CenterSection>
            <Box mt={5} pt={5}>
                <OurShop />
            </Box>
        </CenterSection>
        <ProductSection>
            <CenterSection>
                <SectionHeader title="OUR QUALITY PROMISE" subtitle="We Developed Products We Need" />
                <Box
                    display={'flex'}
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        }
                    }}
                >
                    <ProductDescription summary="Etiam eu turpis tincidunt, vehicula mi ut, imperdiet sem"
                        title="Simplicity in design"
                        icon={faPaste} />
                    <ProductDescription summary="Etiam eu turpis tincidunt, vehicula mi ut, imperdiet sem"
                        title="Confidence in comfort"
                        icon={faUserTie} />
                    <ProductDescription summary="Etiam eu turpis tincidunt, vehicula mi ut, imperdiet sem"
                        title="Make from natural"
                        icon={faSeedling} />
                </Box>
            </CenterSection>
        </ProductSection>
        <Box mt={5}>
            <CenterSection>
                <SectionHeader title="WHAT BUYERS SAY" subtitle="Customers Reviews" />
                <CustomerSlider />
            </CenterSection>
        </Box>
        <Footer />
    </div >
}