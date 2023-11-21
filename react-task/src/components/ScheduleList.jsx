import React from "react";
import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { DateTimePicker } from "@mui/x-date-pickers";

const ScheduleList = () => {
  return (
    <Box
      p={2}
      sx={{
        borderBottom: "2px solid #e0e0e0",
      }}
    >
      <Box
        sx={{
          // boxShadow: "1px 1px 1px rgba(0.10, 0.10, 0.10, 0.10)",
          // borderRadius: 2,
          padding: 2,
          // borderBottom: "2px solid #e0e0e0",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar sx={{ margin: 1 }} />
            <Typography>Name</Typography>
          </Stack>
          <DeleteOutlineIcon />
        </Stack>
        <Stack
          // p={1}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={1}>
            {/* <fieldset>
              <legend><b>Start Date & Time</b></legend>
              <input type="datetime" name="" id="" />
            </fieldset> */}
            <fieldset style={{ padding: "10px" }}>
              <legend>
                <b>Start Date & Time</b>
              </legend>
              <TextField
                type="datetime-local"
                variant="outlined"
                sx={{
                  width: "200px", // Set your desired width
                  height: "30px", // Set your desired height
                  "& .MuiOutlinedInput-root": {
                    border: "none", // Remove input field border
                  },
                  "& .MuiInputBase-input": {
                    padding: "5px", // Add padding if needed
                    outline: "none", // Remove input field outline
                    // boxSizing: "border-box", // Include padding and border in the total width and height
                  },
                  border:"none"
                }}
              />
            </fieldset>
            <fieldset style={{ padding: "10px" }}>
              <legend>
                <b>Start Date & Time</b>
              </legend>
              <TextField
                type="datetime-local"
                variant="outlined"
                sx={{
                  width: "200px", // Set your desired width
                  height: "30px", // Set your desired height
                  "& .MuiOutlinedInput-root": {
                    border: "none", // Remove input field border
                  },
                  "& .MuiInputBase-input": {
                    padding: "5px", // Add padding if needed
                    outline: "none", // Remove input field outline
                    // boxSizing: "border-box", // Include padding and border in the total width and height
                  },
                  border:"none"
                }}
              />
            </fieldset>

            {/* <DateTimePicker
              label="Start Date & Time"
              // InputLabelProps={{
              //   style: {
              //     // position: "absolute",
              //   },
              // }}
              renderInput={(props) => <TextField {...props} />}
              sx={{ borderRadius: 2 }}
            /> */}
            {/* <DateTimePicker label="End Date & Time" /> */}
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
