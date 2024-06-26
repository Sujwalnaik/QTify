import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";
import { leftNavigation } from "../Carouselmodule";
import { Grid } from "@mui/material";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <Grid sx={leftNavigation}>
      {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </Grid>
  );
};

export default CarouselLeftNavigation;
