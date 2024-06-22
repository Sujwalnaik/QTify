import React, { useEffect, useState } from "react";
import Cards from "../../common/card/card";
import { Grid, Typography, useScrollTrigger } from "@mui/material";
import { mainContainer, titleText } from "./Section-style";
import {
  getTopAlbums as FetchTopAlbums,
  getNewAlbums as FetchGetNewAlbums,
} from "../../utils/allApiCall/ApiCall";
import axios from "axios";

function Section() {
  const [getTopAlbums, setGetTopAlbums] = useState([]);
  const [getAllAlbums, setGetAllAlbums] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <>
      <Grid sx={mainContainer}>
        <Grid>
          <Grid container marginBottom={"20px"}>
            <Typography sx={titleText}>Top Albums</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
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
        </Grid>
        <Grid>
          <Grid container margin={"50px 0px 20px 0px"}>
            <Typography sx={titleText}>New Albums</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              gap: 5,
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {getAllAlbums.map((item, index) => (
              <Cards
                key={index}
                alt="image"
                image={item.image}
                followers={item.follows}
                title={item.title}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Section;
