import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "60px",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h4" component="h5">
            Assignees & Schedule
          </Typography>
          <CloseIcon />
        </Stack>
      </Box>
      <Box
        sx={{
          height: "60px",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            borderBottom: "2px solid #2196f3",
          }}
        >
          <Typography>Schedule</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
