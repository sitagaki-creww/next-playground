"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [
    {
      label: "応募数",
    },
  ],
  height: 200,
};

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[
        {
          scaleType: "band",
          dataKey: "country",
          tickFontSize: 10,
          tickLabelStyle: {
            margin: "100px",
            padding: "100px",
          },
        },
      ]}
      series={[{ dataKey: "total", label: "総数" }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}

export const dataset = [
  {
    country: "Japan",
    total: 4,
  },
  {
    country: "South Korea",
    total: 3,
  },
  {
    country: "Taiwan",
    total: 2,
  },
  {
    country: "USA",
    total: 1,
  },
];
