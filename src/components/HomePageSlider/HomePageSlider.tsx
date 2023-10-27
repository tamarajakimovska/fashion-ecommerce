import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import HomePageImage1 from '../../images/HomePageImage1.jpeg';
import HomePageImage2 from '../../images/HomePageImage2.jpeg';
import { Box, Button, ButtonProps, styled } from "@mui/material";
import { useNavigate } from "react-router";

const IMAGES = [
    {
        image: HomePageImage1
    },
    {
        image: HomePageImage2
    }
]
const CenterSection = styled('div')({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px'
})

const BlackButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    padding: '10px 20px',


    backgroundColor: '#111',
    '&:hover': {
        backgroundColor: '#111',
    },
}));

const HomePageTitle = styled('h2')(({ theme }) => ({
    fontSize: '38px',
    fontFamily: 'Jost',
    [theme.breakpoints.down("sm")]: {
        fontSize: '24px'
    },
}))

export const HomePageSlider = () => {
    const navigate = useNavigate();
    return <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
            clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
    >
        {IMAGES.map((currentImage) => {
            return <SwiperSlide className="homepage-slide">
                <img src={currentImage.image} alt="slider-post" />
                <Box position={'absolute'} width='100%' left={'0%'}>
                    <CenterSection>
                        <Box textAlign={'left'} pl={'2rem'}>
                            <Box
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'block'
                                    }
                                }}
                            >
                                HOLIDAY 2023</Box>
                            <HomePageTitle>Women's New Arrival</HomePageTitle>
                            <Box
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'block'
                                    }
                                }}
                            >
                                Available NOW for</Box>
                            <Box mt={3} onClick={() => navigate("/product-description/ff61b985-ce71-44fc-bc5a-89fe73883bdd")}>  <BlackButton>View Product</BlackButton> </Box>
                        </Box>
                    </CenterSection>
                </Box>
            </SwiperSlide>
        })}
    </Swiper>
}