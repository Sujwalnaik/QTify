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
        padding={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80px", marginLeft: "20px" }}
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center">
          <TextField
            type="search"
            placeholder="Search an album of your voice"
            variant="outlined"
            sx={{
              // width: "100%",
              width: "40rem",

              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                border: "1px solid black",
                bgcolor: "white",
              },
              "&.Mui-focused": {
                border: "none",
                // boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{
                      borderLeft: "2px solid grey",
                      width: "auto",
                      height: "30px",
                      padding: "8px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid>
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
              marginRight: "20px",
              "&:hover": {
                bgcolor: "black",
              },
            }}
          >
            Give Feedback
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Navbar;
