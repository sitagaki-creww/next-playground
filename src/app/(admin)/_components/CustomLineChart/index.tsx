"use client";

import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { MakeOptional } from "@mui/x-charts/internals";
import { LineSeriesType } from "@mui/x-charts";
import { FormControlLabel, FormGroup, Stack, Switch } from "@mui/material";

const commonSeriesSetting: MakeOptional<LineSeriesType, "type"> = {
  curve: "linear",
};

const CustomLineChart = () => {
  const [series, setSeries] = useState([
    {
      ...commonSeriesSetting,
      label: "Japan",
      data: [2, 50, 2, 8.5, 1.5, 5],
      color: "tomato",
      checked: true,
    },
    {
      ...commonSeriesSetting,
      label: "South Korea",
      data: [10, 4, 1, 10, 100, 10],
      color: "skyblue",
      checked: true,
    },
    {
      ...commonSeriesSetting,
      label: "USA",
      data: [5, 5, 75, 8, 13, 1],
      color: "pink",
      checked: true,
    },
    {
      ...commonSeriesSetting,
      label: "Taiwan",
      data: [1, 10, 42, 40, 32, 21],
      color: "green",
      checked: true,
    },
  ]);

  const seriesWithoutUnchecked = series.filter(({ checked }) => checked);

  const seriesForLineChart = seriesWithoutUnchecked.map(
    ({ curve, label, data, color }) => {
      return { curve, label, data, color };
    }
  );

  const toggleSeries = (label: string) => {
    setSeries((prev) =>
      prev.map((s) => (s.label === label ? { ...s, checked: !s.checked } : s))
    );
  };

  return (
    <Stack>
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
            valueFormatter: (date) =>
              `${date.getMonth() + 1}/${date.getDate()}`,
            scaleType: "point",
          },
        ]}
        onLineClick={(e) => console.log(2)}
        onMarkClick={(e) => console.log(1)}
        onAxisClick={(e) => console.log(3)}
        onAreaClick={(e) => console.log(4)}
        onHighlightChange={(e) => console.log(5)}
        series={seriesForLineChart}
        height={300}
      />

      <FormGroup sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
        {series.map((s) => (
          <FormControlLabel
            key={s.label}
            control={
              <Switch
                size="small"
                checked={s.checked}
                onChange={() => toggleSeries(s.label)}
              />
            }
            label={s.label}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default CustomLineChart;
