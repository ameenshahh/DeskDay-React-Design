import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import AssigneeList from "./AssigneeList";

const Sidebar = () => {
  return (
    <Box
      flex={1.5}
      sx={{
        height: "100%",
        border:"2px solid #e0e0e0"
      }}
    >
      <Stack>
        <Box sx={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.10)" }}>
          <Stack direction={"row"} justifyContent={"space-between"} p={2}>
            <Typography>Resources</Typography>
            <KeyboardArrowUpIcon />
          </Stack>
        </Box>
        <Box p={2}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              backgroundColor: "#F1EFEF",
              boxShadow: "1px 1px 1px rgba(0.10, 0.10, 0.10, 0.10)",
              borderRadius: 2,
              height: "35px",
            }}
          >
            <SearchIcon
              sx={{
                margin: 1,
                color: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <Typography
              sx={{
                fontWeight: 300,
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Search Box
            </Typography>
          </Stack>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", maxHeight: "300px" }}>
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            {/* <AssigneeList />
            <AssigneeList />
            <AssigneeList /> */}
            {/* <AssigneeList /> */}
            {/* <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList />
            <AssigneeList /> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
