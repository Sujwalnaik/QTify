import { Grid } from "@mui/material";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <Grid sx={{ bgcolor: "red", height: "1000px" }}>
      <Navbar />
      <Home />
    </Grid>
  );
}

export default App;
