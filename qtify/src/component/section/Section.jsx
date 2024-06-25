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

  return (
    <>
      <Grid sx={mainContainer}>
        <Grid container marginBottom={"20px"}>
          <Typography sx={titleText}>Top Albums</Typography>
          <Button onClick={handleToggle}>
            {showCarousel ? "Show All" : "Collapse"}
          </Button>
        </Grid>
        {showCarousel ? (
          <Carousel
            items={getTopAlbums}
            renderItem={(item) => (
              <Cards
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            )}
          />
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",

              gap: 5,
              overflowX: "auto",
              scrollbarWidth: "none",
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
        <Grid container margin={"50px 0px 20px 0px"}>
          <Typography sx={titleText}>New Albums</Typography>
        </Grid>
        <Carousel
          sx={{ display: "Flex" }}
          items={getAllAlbums}
          renderItem={(item) => (
            <Cards
              alt="image"
              image={item.image}
              followers={item.follows}
              title={item.title}
            />
          )}
        />
      </Grid>
    </>
  );
}

export default Section;
