import React from "react"

import { Route,Routes } from "react-router-dom"
import LandingPage from "./mainPages/LandingPage";
import AlbumsDetails from "./mainPages/AlbumsDetails/AlbumsDetails";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/album/:slug" element={<AlbumsDetails />} />
    <Route path="*" element={<LandingPage />} />
  </Routes>
  )
}

export default App