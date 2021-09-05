import React, { Fragment } from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import "./style.scss";

const Chart = () => {
  const rowData = [
    {
      group: "Dataset 1",
      date: "2018-12-31T23:00:00.000Z",
      value: 10000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-01T04:00:00.000Z",
      value: 12000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-01T09:00:00.000Z",
      value: 14000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-01T23:00:00.000Z",
      value: 25000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-02T01:00:00.000Z",
      value: 26000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-02T23:00:00.000Z",
      value: 10000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-03T04:00:00.000Z",
      value: 10000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-03T09:00:00.000Z",
      value: 12000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-04T23:00:00.000Z",
      value: 45000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-06T23:00:00.000Z",
      value: 49000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-07T14:00:00.000Z",
      value: 45000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-08T23:00:00.000Z",
      value: 50000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-09T04:00:00.000Z",
      value: 52000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-09T14:00:00.000Z",
      value: 55000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-09T23:00:00.000Z",
      value: 50000,
    },
    {
      group: "Dataset 1",
      date: "2019-01-12T23:00:00.000Z",
      value: 79999,
    },
    {
      group: "Predicted",
      date: "2019-01-12T23:00:00.000Z",
      value: 80000,
    },
    {
      group: "Predicted",
      date: "2019-01-14T09:00:00.000Z",
      value: 85000,
    },
    {
      group: "Predicted",
      date: "2019-01-15T06:00:00.000Z",
      value: 90000,
    },
    {
      group: "Predicted",
      date: "2019-01-15T17:00:00.000Z",
      value: 70000,
    },
  ];

  const state = {
    options: {
      title: "Revenue Forecast",
      axes: {
        bottom: {
          title: "Date",
          mapsTo: "date",
          scaleType: "time",
        },
        left: {
          mapsTo: "value",
          title: "Revenue",
          scaleType: "linear",
        },
      },
      curve: "curveMonotoneX",
      height: "400px",
    },
  };
  return (
    <div style={{ marginBottom: "1rem", width: "100%" }}>
      <LineChart data={rowData} options={state.options}></LineChart>
    </div>
  );
};

export default Chart;
