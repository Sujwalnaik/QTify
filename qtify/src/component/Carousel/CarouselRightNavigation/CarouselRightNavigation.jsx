import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";
import { rightNavigation } from "../Carouselmodule";
import { Grid } from "@mui/material";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid sx={rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </Grid>
  );
};

export default CarouselRightNavigation;
