import React, { useEffect } from "react";
import { wrapper } from "./Carouselmodule";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { Grid } from "@mui/material";

const Controls = ({ data }) => {
  const { swiper } = useSwiper();
  useEffect(() => {
    swiper?.slideTo(0);
  }, [data]);
};

const Carousel = ({ data, renderCardComponent, showAll }) => {
  return (
    <Grid sx={wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={showAll ? "auto" : ""}
        spaceBetween={10}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default Carousel;
