import { Box, Button, Stack } from "@mui/material";
import React from "react";
import ScheduleList from "./ScheduleList";

const Main = ({ selectedAssignees }) => {
  return (
    <Box
      flex={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        flex={3}
        sx={{
          overflow: "auto",
        }}
      >
        {selectedAssignees.map((assignee) => {
          return <ScheduleList key={assignee.index} assignee={assignee} />;
        })}
      </Box>

      {selectedAssignees.length > 0 && (
        <Box
          sx={{
            height: "70px",
            border: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack
            spacing={2}
            direction={"row"}
            sx={{
              marginRight: 2,
            }}
          >
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Main;
