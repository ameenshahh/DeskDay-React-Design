import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Avatar, Box, InputBase, Stack, Typography } from "@mui/material";
import React from "react";

const ScheduleList = ({ assignee }) => {
  return (
    <Box
      p={2}
      sx={{
        borderBottom: "2px solid #e0e0e0",
      }}
    >
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginBottom: 2 }}
          >
            <Avatar sx={{ marginRight: 1 }} />
            <Typography>{assignee.name}</Typography>
          </Stack>
          <DeleteOutlineIcon />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={1}>
            <fieldset
              style={{
                padding: "10px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
            >
              <legend>
                <b>Start Date & Time</b>
              </legend>
              <InputBase
                type="datetime"
                placeholder="DD/MM/YY"
                sx={{
                  width: "200px",
                  height: "30px",
                }}
              />
            </fieldset>
            <fieldset
              style={{
                padding: "10px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
            >
              <legend>
                <b>Start Date & Time</b>
              </legend>
              <InputBase
                type="datetime"
                placeholder="DD/MM/YY"
                variant="outlined"
                sx={{
                  width: "200px",
                  height: "30px",
                }}
              />
            </fieldset>
          </Stack>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: 2,
              height: "35px",
              width: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddIcon />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ScheduleList;
