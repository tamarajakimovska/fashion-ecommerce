import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Skeleton } from '@mui/material';

interface Props {
    images: string[]
}

export const ImagesSlider = ({ images = [] }: Props) => {
    return <div>
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            style={{ maxHeight: 800 }}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
        >
            {
                images.length ? images.map((image) => {
                    return <SwiperSlide> <img src={image} alt="slider-post" /></SwiperSlide>
                }) : <Skeleton variant="rounded" width={'100%'} height={'100vh'} />
            }
        </Swiper>
    </div>
}