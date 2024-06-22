import { Grid, Typography } from "@mui/material";
import React from "react";
import { heroContainer, textHero } from "./Home-style";
import heroLogo from "../../assets/hero_headphones.png";

function Home() {
  return (
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
  );
}

export default Home;
