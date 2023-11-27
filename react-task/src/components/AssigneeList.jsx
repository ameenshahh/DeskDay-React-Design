import { faker } from "@faker-js/faker";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const AssigneeList = ({ index, assignee, selected, assigneeClickHandler }) => {
  const fakeAvatar = faker.image.avatarLegacy();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: selected ? "#f6fef6" : "",
      }}
      onClick={() => assigneeClickHandler(index)}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Avatar src={fakeAvatar} sx={{ margin: 1 }} />
        <Typography>{assignee.name}</Typography>
      </Stack>
      {selected && <CheckCircleIcon color={"success"} />}
    </Stack>
  );
};

export default AssigneeList;
