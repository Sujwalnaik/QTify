import React from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const mobileView = useMediaQuery("(max-width: 500px)");
  // const mobileView = useMediaQuery("(max-width: 500px)");
  return (
    <Grid container position={"sticky"} top={"0px"} zIndex={10}>
      <Grid
        container
        item
        xs={12}
        bgcolor={"#34C94B"}
        padding={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80px", marginLeft: "20px" }}
          />
        </Grid>

        <Grid
          item
          xs
          display="flex"
          justifyContent="center"
          sx={{ flexGrow: 1, mx: { xs: 2, sm: 3, lg: 10 } }}
        >
          <TextField
            type="search"
            placeholder="Search an album of your voice"
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: "600px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                border: "1px solid black",
                bgcolor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
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

        <Grid item>
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              bgcolor: "black",
              color: "#34C94B",
              fontSize: mobileView ? "10px" : "18px",
              width: { xs: "auto", sm: "150px", lg: "200px" },
              borderRadius: "10px",
              textTransform: "none",
              marginRight: "19px",
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
