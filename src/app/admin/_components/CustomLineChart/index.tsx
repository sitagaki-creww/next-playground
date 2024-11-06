"use client";

import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { MakeOptional } from "@mui/x-charts/internals";
import { LineSeriesType } from "@mui/x-charts";

const commonSeriesSetting: MakeOptional<LineSeriesType, "type"> = {
  curve: "linear",
};

const CustomLineChart = () => (
  <LineChart
    xAxis={[
      {
        data: [
          new Date("2024/10/10"),
          new Date("2024/10/11"),
          new Date("2024/10/12"),
          new Date("2024/10/13"),
          new Date("2024/10/14"),
          new Date("2024/10/15"),
        ],
        valueFormatter: (date) => `${date.getMonth() + 1}/${date.getDate()}`,
        scaleType: "point",
      },
    ]}
    onLineClick={(e) => console.log(2)}
    onMarkClick={(e) => console.log(1)}
    onAxisClick={(e) => console.log(3)}
    onAreaClick={(e) => console.log(4)}
    onHighlightChange={(e) => console.log(5)}
    series={[
      {
        ...commonSeriesSetting,
        label: "Japan",
        data: [2, 50, 2, 8.5, 1.5, 5],
        color: "tomato",
      },
      {
        ...commonSeriesSetting,
        label: "South Korea",
        data: [10, 4, 1, 10, 100, 10],
        color: "skyblue",
      },
      {
        ...commonSeriesSetting,
        label: "USA",
        data: [5, 5, 75, 8, 13, 1],
        color: "pink",
      },
      {
        ...commonSeriesSetting,
        label: "Taiwan",
        data: [1, 10, 42, 40, 32, 21],
        color: "green",
      },
    ]}
    width={500}
    height={300}
  />
);

export default CustomLineChart;
