"use client";

import BarChartIcon from "@mui/icons-material/BarChart";
import { Box, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import RowDivider from "../../molecules/RowDivider";
import HorizontalBars from "../../molecules/HorizontalBars";
import CustomLineChart from "../../molecules/CustomLineChart";

export const DashboardPageTemplate = () => {
  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        spacing={0.5}
        alignItems={"center"}
        sx={{ fontSize: 32 }}
      >
        <BarChartIcon sx={{ fontSize: "inherit" }} />
        <Typography component="h2" sx={{ fontSize: "inherit" }}>
          Dashboard
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Paper sx={{ p: 2, flexBasis: "100%" }}>
            <Typography variant="h5" component="h3">
              メール受付数
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1 }}
            >
              <Stack spacing={2} divider={<RowDivider />}>
                <Stack spacing={1}>
                  <Typography variant="caption">総数</Typography>
                  <Typography variant="h4">1024</Typography>
                </Stack>

                <Stack spacing={4} direction={"row"}>
                  <Stack spacing={1}>
                    <Typography variant="caption">今日</Typography>
                    <Typography variant="h5">512</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="caption">昨日</Typography>
                    <Typography variant="h5">256</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Paper>

          <Paper sx={{ p: 2, flexBasis: "100%" }}>
            <Typography variant="h5" component="h3">
              アプリケーション提出数
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1 }}
            >
              <Stack spacing={2} divider={<RowDivider />}>
                <Stack spacing={1}>
                  <Typography variant="caption">総数</Typography>
                  <Typography variant="h4">11</Typography>
                </Stack>

                <Stack spacing={4} direction={"row"}>
                  <Stack spacing={1}>
                    <Typography variant="caption">今日</Typography>
                    <Typography variant="h5">1</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="caption">昨日</Typography>
                    <Typography variant="h5">2</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Paper>

          <Paper sx={{ p: 2, flexBasis: "100%" }}>
            <Typography variant="h5" component="h3">
              国別アプリケーション提出数
            </Typography>

            <HorizontalBars />
          </Paper>
        </Stack>

        <Box>
          <Paper sx={{ p: 2, flexGrow: 1 }}>
            <Typography variant="h5" component="h3">
              アプリケーション提出数推移
            </Typography>

            <CustomLineChart />
          </Paper>
        </Box>
      </Stack>
    </Stack>
  );
};
