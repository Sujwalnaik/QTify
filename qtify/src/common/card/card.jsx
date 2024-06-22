import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { cardContent, mainCard, titleStyle } from "./card-style";

function Cards({ image, alt, followers, title }) {
  return (
    <Box>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Card sx={mainCard}>
            <CardMedia
              component="img"
              image={image}
              alt={alt}
              sx={{ height: "100%", objectFit: "cover" }}
            />
            <CardContent sx={cardContent}>
              <Chip
                label={followers}
                sx={{
                  bgcolor: "black",
                  color: "white",
                }}
              />
            </CardContent>
          </Card>
          <Typography sx={titleStyle}>{title}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;
