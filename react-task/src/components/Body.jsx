import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Stack } from "@mui/material";

const Body = () => {
  return (
    <Stack direction="row" sx={{
        height:"100vh"
    }}>
      <Sidebar />
      <Main />
    </Stack>
  );
};

export default Body;
