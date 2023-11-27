import { Stack } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Body = () => {
  const [selectedAssignees, setSelectedAssignees] = useState([]);

  const [assignees, setAssignees] = useState([
    { index: 0, name: "John", selected: false },
    { index: 1, name: "Grace", selected: false },
    { index: 2, name: "Hannah", selected: false },
    { index: 3, name: "Heather", selected: false },
    { index: 4, name: "Elizabeth", selected: false },
    { index: 5, name: "Maria", selected: false },
    { index: 7, name: "Clarkson", selected: false },
    { index: 8, name: "Davidson", selected: false },
    { index: 9, name: "Gill", selected: false },
  ]);

  return (
    <Stack
      direction="row"
      sx={{
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Sidebar
        assignees={assignees}
        selectedAssignees={selectedAssignees}
        setSelectedAssignees={setSelectedAssignees}
      />
      <Main selectedAssignees={selectedAssignees} />
    </Stack>
  );
};

export default Body;
