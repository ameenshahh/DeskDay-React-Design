import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, InputBase, Stack, Typography } from "@mui/material";
import React from "react";

const Sidebar = ({ assignees, selectedAssignees, setSelectedAssignees }) => {
  const selectAssigneeHandler = (assignee) => {
    let selectedAssignee = assignees.find(
      (item) => item.index === assignee.index
    );
    selectedAssignee.selected = !selectedAssignee.selected;

    const isSelected = selectedAssignees.some(
      (selectedAssignee) => selectedAssignee.index === assignee.index
    );

    if (isSelected) {
      setSelectedAssignees((prevSelectedAssignees) =>
        prevSelectedAssignees.filter(
          (selectedItem) => selectedItem.index !== assignee.index
        )
      );
    } else {
      setSelectedAssignees([...selectedAssignees, assignee]);
    }
  };

  console.log(selectedAssignees);
  return (
    <Box flex={1.5}>
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

            <InputBase placeholder="Search Box" />
          </Stack>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", maxHeight: "300px" }}>
          {assignees.map((assignee) => {
            return (
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  backgroundColor: assignee.selected ? "#f6fef6" : "",
                }}
                key={assignee.index}
                onClick={() => selectAssigneeHandler(assignee)}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <Avatar sx={{ margin: 1 }} />
                  <Typography>{assignee.name}</Typography>
                </Stack>
                {assignee.selected && <CheckCircleIcon color={"success"} />}
              </Stack>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
