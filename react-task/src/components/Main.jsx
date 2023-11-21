import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ScheduleList from "./ScheduleList";

const Main = () => {
  return (
    <Box
      flex={4}
      sx={{
        // backgroundColor: "#e0e0e0",
        // height:"100%"
        
      }}
    >
      <Stack justifyContent={"space-between"} sx={{ overflowY: "auto", maxHeight: "600px" }}>
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <ScheduleList />
        <Box>Cancel & Save</Box>
      </Stack>
    </Box>
  );
};

export default Main;
