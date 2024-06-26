import React, { useEffect, useState } from "react";
import Cards from "../card/card";
import { Grid, Typography, Button } from "@mui/material";
import { mainContainer, titleText } from "./Section-style";

import {
  getTopAlbums as FetchTopAlbums,
  getNewAlbums as FetchGetNewAlbums,
} from "../../utils/allApiCall/ApiCall";
import Carousel from "../Carousel/Carousel";
function Section() {
  const [getTopAlbums, setGetTopAlbums] = useState([]);
  const [getAllAlbums, setGetAllAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCarouselSec, setShowCarouselSec] = useState(false);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const result = await FetchTopAlbums(`albums/top`);
        setGetTopAlbums(result);
      } catch (error) {
        setError(error);
      }
    };

    const fetchAllAlbums = async () => {
      try {
        const result = await FetchGetNewAlbums("/albums/new");
        setGetAllAlbums(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTopAlbums();
    fetchAllAlbums();
  }, []);

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  const handleToggle = () => {
    setShowCarousel(!showCarousel);
  };

  const handleToggleSec = () => {
    setShowCarouselSec(!showCarouselSec);
  };

  return (
    <>
      <Grid sx={mainContainer}>
        <Grid
          container
          marginBottom={"20px"}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={titleText}>Top Albums</Typography>
          <Button
            onClick={handleToggle}
            sx={{
              color: "green",
              fontWeight: 800,
              fontWeight: "Poppins",
              fontSize: "20px",
            }}
          >
            {showCarousel ? "Show All" : "Collapse"}
          </Button>
        </Grid>
        {showCarousel ? (
          <Carousel
            // sx={{ display: "flex", flexDirection: "row" }}
            data={getTopAlbums}
            renderCardComponent={(item) => (
              <Cards
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            )}
            showAll={showCarousel}
          />
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            {getTopAlbums?.map((item, index) => (
              <Cards
                key={index}
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            ))}
          </Grid>
        )}

        <Grid
          container
          marginTop={"40px"}
          marginBottom={"20px"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "Poppins",
            fontSize: "20px",
          }}
        >
          <Typography sx={titleText}>Top Albums</Typography>
          <Button
            onClick={handleToggleSec}
            sx={{ color: "green", fontWeight: 700 }}
          >
            {showCarouselSec ? "Show All" : "Collapse"}
          </Button>
        </Grid>
        {showCarouselSec ? (
          <Carousel
            // sx={{ display: "flex", flexDirection: "row" }}
            data={getAllAlbums}
            renderCardComponent={(item) => (
              <Cards
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            )}
            showAll={showCarousel}
          />
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            {getAllAlbums?.map((item, index) => (
              <Cards
                key={index}
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            ))}
          </Grid>
        )}
        {/* allAlbnum */}
      </Grid>
    </>
  );
}

export default Section;
