import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { heroContainer, textHero } from "./Home-style";
import heroLogo from "../../assets/hero_headphones.png";
import Cards from "../card/card";
import Section from "../section/Section";
// import FilterTabs from "../FilterTabs/FilterTabs";
import axios from "axios";

function Home() {
  const [allSongsData, setAllSongsData] = useState([]);

  const fetchAllSongData = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setAllSongsData(res.data); // Store res.data, not just res
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
  };

  useEffect(() => {
    fetchAllSongData();
  }, []);
  return (
    <Grid sx={{ height: "2000px", bgcolor: "black" }}>
      <Grid container sx={heroContainer}>
        <Grid display={"flex"} flexDirection={"column"}>
          <Typography sx={textHero}>100 Thousand Songs, ad-free</Typography>
          <Typography sx={textHero}>Over thousands podcast episodes</Typography>
        </Grid>
        <Grid>
          <img
            src={heroLogo}
            alt="Heroimage"
            style={{ width: "auto", height: "200px" }}
          />
        </Grid>
      </Grid>
      <Grid sx={{ bgcolor: "black", height: "100vh", marginTop: "30px" }}>
        <Section />
      </Grid>
      <Grid
        container
        sx={{ bgcolor: "black", height: "2000vh", marginTop: "50px" }}
      >
        <Typography>Songs </Typography>
        {allSongsData.map((item) => (
          <Cards
            key={item.id} // Assuming item.id exists to provide a unique key
            alt="Song Image"
            followers={item.followers} // Assuming these props are correct for Cards component
            image={item.image}
            title={item.title}
          />
        ))}
      </Grid>
      {/* <CustomTabs /> */}
    </Grid>
  );
}

export default Home;
