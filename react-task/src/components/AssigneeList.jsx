import React, { useState } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AssigneeList = () => {
  const [selected, setSelected] = useState(false);
  const fakeAvatar = faker.image.avatarLegacy();
  const fakeName = faker.person.fullName();

  const selectAssigneeHandler = () => {
    setSelected(!selected)
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      onClick={selectAssigneeHandler}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Avatar src={fakeAvatar} sx={{ margin: 1 }} />
        <Typography>{fakeName}</Typography>
      </Stack>
      {selected && <CheckCircleIcon />}
    </Stack>
  );
};

export default AssigneeList;
