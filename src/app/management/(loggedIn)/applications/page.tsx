import TableChartIcon from "@mui/icons-material/TableChart";
import { Stack, Typography } from "@mui/material";
import Table from "../../_components/Table";

export default function Home() {
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

      <Table />
    </Stack>
  );
}
