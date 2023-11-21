import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Box } from "@mui/material";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box className="App">
        <Header />
        <Body />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
