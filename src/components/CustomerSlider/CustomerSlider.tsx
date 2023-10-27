import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules';
import './CustomerSlider.css'
import { Box } from "@mui/material";

export const CustomerSlider = () => {
    return <Box my={5}>
        <Swiper
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: ".next"
            }}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide-wrapper">
                <div className="title-swiper">“ As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.” </div>
                <div className="subtitle-swiper">    Randy Workman </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-wrapper">
                <div className="title-swiper">“ As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.” </div>
                <div className="subtitle-swiper">    Randy Workman </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-wrapper">
                <div className="title-swiper">“ As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.” </div>
                <div className="subtitle-swiper">    Randy Workman </div> </SwiperSlide>

        </Swiper>
    </Box>
}