"use client";

import TableChartIcon from "@mui/icons-material/TableChart";
import { Stack, Typography } from "@mui/material";
import { useModel } from "./model";
import { ApplicationTable } from "../../organisms/ApplicationTable";

export const ApplicationsPageTemplate = () => {
  const { applicationList } = useModel();

  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        spacing={0.5}
        alignItems={"center"}
        sx={{ fontSize: 32 }}
      >
        <TableChartIcon sx={{ fontSize: "inherit" }} />
        <Typography component="h2" sx={{ fontSize: "inherit" }}>
          Applications
        </Typography>
      </Stack>

      <ApplicationTable applicationList={applicationList} />
    </Stack>
  );
};
