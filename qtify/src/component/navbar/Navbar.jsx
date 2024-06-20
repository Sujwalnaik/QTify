import React from "react";
import Grid from "@mui/material/Grid";
import { Button, InputAdornment, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <Grid>
      <Grid
        item
        xs={12}
        bgcolor={"#34C94B"}
        padding={"9px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80px", marginLeft: "40px" }}
          />
        </Grid>

        <Grid container alignItems="center" justifyContent="center">
          <TextField
            type="search"
            placeholder="Search an album of your voice"
            variant="outlined"
            sx={{
              fontSize: "15px",
              width: "568px",

              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                border: "1px solid #121212",
                bgcolor: "white",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ borderLeft: "1px solid black" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            fontWeight: 600,
            bgcolor: "black",
            color: "#34C94B",
            fontSize: "18px",
            width: "200px",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "black",
            },
          }}
        >
          Give FeedBack
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;
